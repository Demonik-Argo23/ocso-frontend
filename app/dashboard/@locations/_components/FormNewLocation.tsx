import { Input } from "@heroui/react";
import createLocation from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { Button } from "@heroui/react";

export default async function FormNewLocation({ store }: { store: string | undefined | string[] }) {
    if (store) return null;
    const headers = await authHeaders();
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...headers,
        },
        next: {
            tags: ['dashboard:managers'],
        },
    });
    const dataManagers: Manager[] = await responseManagers.json();
    const headersLocations = await authHeaders();
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...headersLocations,
        },
        next: {
            tags: ['dashboard:locations', 'dashboard:locations:managers'],
        },
    });
    const dataLocations: Location[] = await responseLocations.json();
    return (
        <form action={createLocation} className="flex flex-col gap-8 w-full max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-orange-500 text-center mb-2">Crear Tienda</h1>
            <Input required label="Nombre" placeholder="Ocso Jirikiya" name="locationName" className="bg-gray-50 rounded-lg w-full" />
            <Input required label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" className="bg-gray-50 rounded-lg w-full" />
            <div className="flex gap-4">
                <Input required label="Latitud" placeholder="-120" name="locationLat" className="bg-gray-50 rounded-lg w-full" />
                <Input required label="Longitud" placeholder="20" name="locationLng" className="bg-gray-50 rounded-lg w-full" />
            </div>
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3 transition w-full text-lg">
                Subir
            </Button>
        </form>
    )
}