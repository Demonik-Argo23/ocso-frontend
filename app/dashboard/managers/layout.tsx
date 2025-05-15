import ManagerCards from "./_components/ManagerCards";
import { ReactNode } from "react";

export default function LayoutManagers({ children, count }: { children: ReactNode, count: ReactNode }) {
    return (
        <div className="flex w-full min-h-[90vh] gap-8 p-8">
            <aside className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 overflow-y-auto">
                <ManagerCards />
            </aside>
            <main className="flex-1 flex flex-col justify-center items-center gap-10">
                <div className="w-full max-w-xl">{children}</div>
                <div>{count}</div>
            </main>
        </div>
    );
}