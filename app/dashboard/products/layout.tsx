import { API_URL } from "@/constants"
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders"
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";


const LayoutProducts = async ({ children }: { children: ReactNode }) => {
    const responseProducts = await fetch(`${API_URL}/products`, {
        headers: {
            ...await (authHeaders()),
        },
        next: {
            tags: ["dashboard:products"],
        },
    });
    const products: Product[] = await responseProducts.json();
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...await (authHeaders()),
        },
        next: {
            tags: ["dashboard:providers"],
        },
    });

    const data = await responseProviders.json();

    // Asegúrate de que providers siempre sea un array
    let providers: any[] = [];
    if (Array.isArray(data)) {
        providers = data;
    } else if (Array.isArray(data?.data)) {
        providers = data.data;
    } else if (Array.isArray(data?.providers)) {
        providers = data.providers;
    }

    if (!Array.isArray(providers) || providers.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full text-red-500 text-xl">
                No tienes autorización para ver los proveedores.<br />
                {data?.message && <span className="text-base text-gray-500">{data.message}</span>}
            </div>
        );
    }

    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-3/12">
                <FilteredCards products={products} providers={providers} />
            </div>
            <div className="w-9/12">
                {children}
            </div>
        </div>
    )
};

export default LayoutProducts;