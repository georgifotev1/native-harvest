"use client";

import { AlignLeft, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const toggleNavHandler = () => setShowCategories((state) => !state);

  return (
    <>
      <div
        className="flex justify-between items-center bg-green-500 h-12 text-white p-2"
        onClick={toggleNavHandler}
      >
        <AlignLeft />
        <div className="flex space-x-1">
          <h2>Categories</h2>
          <ChevronUp />
        </div>
      </div>
      <nav
        className={`${!showCategories ? "hidden" : ""} w-full transition-all`}
      >
        <ul>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
