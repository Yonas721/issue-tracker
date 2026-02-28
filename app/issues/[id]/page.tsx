import prisma from "@/app/prisma";
import { notFound } from "next/navigation";

export default async function DetailsPage({params}:{params: Promise<{id:string}>}){

const {id} = await params;

const issue=await prisma.issue.findUnique({
    // we are parsing the id becuase it comes as a string

    where: {id:parseInt(id)}

});

if (!issue){

    // this will triggert the rendering of the nearest not-found.tsx component
    
    notFound();
}

return (
<div>
    <p>{issue.title}</p>
    <p>{issue.description}</p>
    <p>{issue.status}</p>
    <p>{issue.created_at.toDateString()}</p>
</div>

);

   

}