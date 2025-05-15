import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "../_components/ProductCard";
import ProviderCard from "../../providers/_components/ProviderCard";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "./_components/DeleteProduct";
export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const responseProduct = await fetch(`${API_URL}/products/${resolvedParams.id}`,
        {
            headers: {
                ...await (authHeaders()),
            },
            next: {
                tags: [`dashboard:product:${resolvedParams.id}`],

            }
        })
    const product: Product = await responseProduct.json();
    const responseProvider = await fetch(`${API_URL}/providers`,
        {
            headers: {
                ...await (authHeaders()),
            }
        })
    const providers: Provider[] = await responseProvider.json();
    return (
        <div className="w-full">
            <div className="bg-orange-400">
                <h1 className="w-full font-bold text-white text-center text-2x1 py-2">Nombre del producto: {product.productName}</h1>
                <h2 className="text-x1 font-bold text-white text-center">Precio: {product.price}</h2>
                <h2 className="text-md font-bold text-white text-center py-2">Cantidad de sellos: {product.countSeal}</h2>
            </div>
            <ProductCard product={product} />
            <UpdateProduct product={product} providers={providers} />
            <div className="pl-10">
                <DeleteProduct productId={product.productId} />
            </div>
        </div>
    );
}