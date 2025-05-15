import createProducts from "@/actions/products/create"
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...(await (authHeaders())),
        }
    });
    const data = await responseProviders.json();
    console.log("API providers response:", data);

    let providers: any[] = [];
    if (Array.isArray(data)) {
        providers = data;
    } else if (Array.isArray(data?.data)) {
        providers = data.data;
    } else if (Array.isArray(data?.providers)) {
        providers = data.providers;
    }

    // Si no tienes autorización o no hay proveedores válidos, muestra solo el mensaje de error
    if (!Array.isArray(providers) || providers.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full text-red-500 text-xl">
                No tienes autorización para ver los proveedores.<br />
                {data?.message && <span className="text-base text-gray-500">{data.message}</span>}
            </div>
        );
    }

    return (
        <>
            <form className="px-10 justify-center pt-10" action={createProducts}>
                <div className="flex flex-col p-10 rounded-lg gap-6 bg-orange-400">
                    <h1 className="text-2xl text-white font-bold"> Crear Producto </h1>
                    <Input label="Nombre" name="productName" />
                    <Input
                        label="Precio"
                        endContent={<LuDollarSign size={20} />}
                        name="price"
                    />
                    <Input label="Num. de Sellos" name="countSeal" />
                    <SelectProvider providers={providers} />
                    <Button color="primary" type="submit">
                        Crear Producto
                    </Button>
                </div>
            </form>
        </>
    );
};

export default ProductsPage;