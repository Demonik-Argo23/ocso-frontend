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
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input required={true} label="Nombre" placeholder="Ocso Jirikiya" name="locationName" />
            <Input required={true} label="Direccion" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input required={true} label="Latitud" placeholder="-120" name="locationLat" />
            <Input required={true} label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}