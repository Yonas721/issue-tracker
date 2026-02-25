
"use client";
import Link from "next/link";
import { IoBugSharp } from "react-icons/io5";
import {usePathname} from "next/navigation";


export default function NavBar() {
    const currentPath=usePathname();


  return (
    <nav className="flex space-x-6 border-b h-13 items-center mb-5 px-5 ">
      <Link href="/" className="hover:text-red-500">
        <IoBugSharp />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={
              currentPath === "/"
                ? `text-gray-300`
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
                ? `text-gray-300`
                : `hover:text-red-500 transition-colors`
            }
          >
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
}
