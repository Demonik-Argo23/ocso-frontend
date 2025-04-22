import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId);
    return (
        <>
            <form action={updateProviderWithId}
                className=
                "flex flex-wrap gap-10 flex-grow-0 bg-orange-200 rounded-md px-10 items-center py-10  mr-20 justify-center"
            >
                <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre" name="providerName" />
                <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Correo" name="providerEmail" />
                <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Número" name="providerPhoneNumber" />
                <Button type="submit" color="primary" className="mt-4"> Actualizar Proveedor </Button>
            </form>
        </>
    )
}