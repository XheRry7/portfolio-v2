"use client";

import Image from "next/image";
import { useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full sticky top-0 z-30 bg-white py-1 shadow-md">
      <div className="antialiased bg-gray-100">
        <div className="w-full bg-white text-gray-700">
          <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between px-4">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={64}
                height={64}
                className="h-16 w-16"
              />
              <button
                type="button"
                className="rounded-lg focus:shadow-outline focus:outline-none md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                  {!open ? (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0 ${open ? "flex" : "hidden md:flex"}`}
            >
              {nav.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="mt-2 rounded px-4 py-2 text-base font-semibold text-black hover:text-indigo-800 focus:text-indigo-800 md:ml-4 md:mt-0"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
