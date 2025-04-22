import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Provider, Product } from "@/entities";
import ProductCard from "./_components/ProductCard";
import { Link } from "@heroui/react";

export default async function ProviderPage({ params }: {
    params: {
        id: string
    }
}) {
    const headers = await authHeaders();
    const response = await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...headers
        }
    });
    const provider: Provider = await response.json();
    return (
        <div className="flex flex-col pl-10 gap-10 h-[90vh] pt-10">
            <ProviderCard provider={provider} />
            <div className="h-1 bg-orange-900 w-[85vh]" />
            <div className="flex flex-wrap gap-10">
                {provider.products.map((product: Product) => (
                    <Link 
                    href={`/dashboard/products/${product.productId}`} 
                    key={product.productId}
                    className="hover:scale-110 transition-all"
                    >
                        <ProductCard product={product}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}