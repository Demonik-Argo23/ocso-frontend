import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";
import deleteManager from "@/actions/managers/delete";


export default function DeleteManagerButton({
    managerId,
}: {
    managerId: string
}) {
    const deleteByManagerId = async (formData: FormData) => {
        await deleteManager(managerId, formData);
    };
    return (
        <form action={deleteByManagerId}>
            <Button type="submit" color="danger">
                <LuTrash size="20"/>
            </Button>
        </form>
    )
}