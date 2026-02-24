import Link from "next/link";
import { IoBugSharp } from "react-icons/io5";

export default function NavBar() {
  return (
    <nav className="flex space-x-6 border-b h-13 items-center mb-5 px-5 ">
      <Link href="/" className="hover:text-red-500">
        <IoBugSharp />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues" className="hover:text-red-500 transition-colors">
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
}
