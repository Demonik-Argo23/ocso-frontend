import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteLocationButton({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    return (
        <form action={deleteLocation} className="my-4">
            <Button type="submit" name="deletevalue" value={store} color="danger"><LuTrash size="20" /></Button>

        </form>
    )
}