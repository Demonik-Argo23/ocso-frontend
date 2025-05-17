"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashbord({
    children,
    locations,
}: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>) {
    const path = usePathname();
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-orange-100 flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 flex flex-col md:flex-row gap-8 p-8 overflow-auto">
                    <section className="flex-1 flex items-center justify-center">
                        {children}
                    </section>
                    {path === "/dashboard" && (
                        <aside className="w-full md:w-[600px] max-w-2xl flex flex-col items-center">
                            <div className="w-full bg-white rounded-2xl shadow-2xl p-12 flex flex-col gap-10">
                                {locations}
                            </div>
                        </aside>
                    )}
                </main>
            </div>
        </div>
    );
}