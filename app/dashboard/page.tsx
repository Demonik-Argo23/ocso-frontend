import EmployeesLocation from "./@locations/_components/EmployeesLocation";

interface DashboardPageProps {
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function DashboardPage(props: DashboardPageProps) {
    const searchParams = await props.searchParams;

    const store =
        typeof searchParams?.store === "string"
            ? searchParams.store
            : Array.isArray(searchParams?.store)
            ? searchParams.store[0]
            : undefined;

    return (
        <div className="flex h-full min-h-screen w-full bg-gradient-to-r from-orange-100 to-yellow-50">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-xl bg-white/80 rounded-xl shadow-lg p-10 mt-16">
                    {store ? (
                        <EmployeesLocation store={store} />
                    ) : (
                        <p className="text-2xl text-center text-orange-600 font-semibold">
                            Selecciona una tienda para ver los empleados
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}