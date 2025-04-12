import { Input } from "@heroui/react";
import createLocation from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({ store }: { store: string | undefined | string[] }) {
    if (store) return null;

    const authHeadersResolved = await authHeaders();

    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeadersResolved,
        },
        next: {
            tags: ['dashboard:managers'],
        },
    });

    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeadersResolved,
        },
        next: {
            tags: ['dashboard:locations', 'dashboard:locations:managers'],
        },
    });

    const dataManagers: Manager[] = await responseManagers.json();
    const dataLocations: Location[] = await responseLocations.json();

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso Jirikiya" name="locationName" />
            <Input label="Direccion" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input label="Latitud" placeholder="-120" name="locationLat" />
            <Input label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Subir</button>
        </form>
    );
}