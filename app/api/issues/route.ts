import { NextRequest, NextResponse } from "next/server";

import { createIssueSchema } from "@/app/validationSchemas";
import prisma from "@/app/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if(!session){
    return NextResponse.json({error:"unauthoried"},{status:401});
  }
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  //prisma + table name + create method
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}



// export function async POST(request NextRequest){

//   const body=await request.json()
//   const status=

// }
