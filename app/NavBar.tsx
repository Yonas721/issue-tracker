"use client";
import Link from "next/link";
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Flex, Container, DropdownMenu, Avatar, Text } from "@radix-ui/themes";

export default function NavBar() {
  const { status, data: session } = useSession();
  const currentPath = usePathname();

  return (
    <nav className="border-b  py-4">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="4">
            <Link href="/" className="hover:text-red-500">
              <IoBugSharp />
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className={
                    currentPath === "/"
                      ? `text-gray-400`
                      : `hover:text-gray-300 transition-colors`
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/issues"
                  className={
                    currentPath === "/issues"
                      ? `text-gray-400`
                      : `hover:text-red-500 transition-colors`
                  }
                >
                  Issues
                </Link>
              </li>
            </ul>
          </Flex>

          <Flex>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <button className="cursor-pointer bg-transparent border-none p-0">
                    <Avatar src={session.user!.image!} fallback="?" size="2" radius="full"/>
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
            )}

            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
}
