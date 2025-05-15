import { Button, Input } from "@heroui/react";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import updateLocation from "../update";

export default async function FormUpdateLocation({ store }: { store: string | undefined | string[] }) {
    if (!store || store === undefined || typeof store === "object") return null;
    const updateWithStoreId = updateLocation.bind(null, store);
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
    const authHeadersResult = await authHeaders();
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeadersResult,
        },
        next: {
            tags: ['dashboard:locations', 'dashboard:locations:managers'],
        },
    });
    const dataLocations: Location[] = await responseLocations.json();
    let foundLocation = dataLocations.find((location) => location.locationId === +store);
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId);

    return (
        <form
            action={updateWithStoreId}
            className="bg-white shadow-xl rounded-2xl px-8 py-8 flex flex-col gap-6 w-full max-w-lg"
        >
            <h1 className="text-2xl font-bold text-orange-500 text-center mb-2">Actualizar Tienda</h1>
            <Input
                required
                defaultValue={foundLocation?.locationName}
                label="Nombre"
                name="locationName"
                className="bg-gray-50 rounded-lg w-full text-black"
            />
            <Input
                required
                defaultValue={foundLocation?.locationAddress}
                label="Dirección"
                name="locationAddress"
                className="bg-gray-50 rounded-lg w-full text-black"
            />
            <div className="flex gap-4">
                <Input
                    required
                    defaultValue={foundLocation?.locationLatLng[0].toString()}
                    label="Latitud"
                    name="locationLat"
                    className="bg-gray-50 rounded-lg w-full text-black"
                />
                <Input
                    required
                    defaultValue={foundLocation?.locationLatLng[1].toString()}
                    label="Longitud"
                    name="locationLng"
                    className="bg-gray-50 rounded-lg w-full text-black"
                />
            </div>
            <SelectManager
                defaultManager={foundManager?.managerId}
                managers={dataManagers}
                locations={dataLocations}
            />
            <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3 transition w-full text-lg"
            >
                Actualizar
            </Button>
        </form>
    );
}