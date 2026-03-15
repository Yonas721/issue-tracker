"use client";

import { DropdownMenu, Avatar, Text } from "@radix-ui/themes";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { useSession } from "next-auth/react";

export default function SessionStatus() {
  
  const { status, data: session } = useSession();

  if (status === "loading") {
    return <Skeleton width="2rem" height="2rem" circle />;
  } else if (status === "authenticated") {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            title="button"
            className="cursor-pointer bg-transparent border-none p-0"
          >
            <Avatar
              src={session.user!.image!}
              fallback="?"
              size="2"
              radius="full"
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text>{session.user!.email}</Text>
          </DropdownMenu.Label>

          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Logout</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  } else {
    return <Link href="/api/auth/signin">Login</Link>;
  }
}
