import createProvider from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";

export default function FromCreateProvider() {
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2x1 text-white underline justify-center"> Crear nuevo Proveedor </h1>
            <Input label="Nombre" name="providerName" />
            <Input label="Correo" name="providerEmail" />
            <Input label="Número" name="providerPhoneNumber" />
            <Button type="submit" color="primary" className="mt-4"> Crear Proveedor </Button>
        </form>
    )
}