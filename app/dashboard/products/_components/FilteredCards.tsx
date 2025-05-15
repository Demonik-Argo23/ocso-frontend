'use client';
import { Product, Provider } from "@/entities";
import { Input, Link, Select, SelectItem } from "@heroui/react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function FilteredCards({ products, providers }: { products: Product[], providers: Provider[] }) {
    const [filtered, setFiltered] = useState<string>("");
    const [provider, setProvider] = useState<string>();
    const [productsList, setProductsList] = useState<Product[]>(products);
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.productName.toLowerCase().includes(filtered.toLowerCase()) &&
                product.provider.providerId === provider
            ) {
                return true;
            } else return false;
        })
        setProductsList(filteredProducts);
    }, [filtered, provider, products]);
    return (
        <div className="max-h-[90vh] overflow-y-auto min-h-[90vh] flex flex-col gap-4 border-r-orange-400 border-r-2 pt-10 px-10 ">
            <Select label="Proveedor" onChange={(e) => {
                console.log(e.target.value);
            }}>
                {providers.map((provider) => (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                ))}

            </Select>
            <Input onChange={(e) => {
                setFiltered(e.target.value)
            }}
                label="Nombre del Producto"
            />
            {productsList
                .map((product) => {
                    return (
                        <Link
                            className="hover:sacale-110 transition-transform"
                            key={product.productId}
                            href={`/dashboard/products/${product.productId}`}
                        >
                            <ProductCard product={product} />
                        </Link>
                    );
                })}
        </div>
    )
}