import Link from "next/link";
import React from "react";

type Props = {};

export default async function Header({}: Props) {
    const navLinks = ["Home", "About", "Blog", "Contact"];

    return (
        <header>
            <div className="h-20 bg-teal-500">
                <div className="flex items-center w-full container mx-auto h-full px-5">
                    <div>
                        <Link href="/home">
                            <h1 className="text-xl font-semibold text-white">ব্লগ</h1>
                        </Link>
                    </div>
                    <div className="ml-auto">
                        <nav className="flex items-center">
                            {navLinks.map((navlink: string, id: number) => {
                                return (
                                    <Link key={id} href={`/${navlink.toLowerCase()}`}>
                                        <div className="px-4 py-2 rounded hover:bg-teal-600">
                                            <span className="text-white">{navlink}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
