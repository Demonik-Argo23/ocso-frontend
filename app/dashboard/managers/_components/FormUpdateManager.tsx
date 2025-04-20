import { Manager } from "@/entities";
import updateManager from "@/actions/managers/delete";
import { Button, Input } from "@heroui/react";
import SelectStore from "../[id]/_components/SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerwithId = updateManager.bind(null, manager.managerId);
    const headers = await authHeaders();
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...headers
        }
    })
    const stores = await responseStores.json();
    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            updateManager(manager.managerId, formData); 
        }} className="bg-orange-400 rounded-md">
            <h1> Actualizar Manager </h1>
            <Input
                defaultValue="{manager.managerFullName}"
                placeholder="Marco Aurelio"
                name="managerFullName"
            />
            <Input
                defaultValue="{manager.managerEmail}"
                placeholder="maurelio@gmail.com"
                name="managerEmail"
            />
            <Input
                defaultValue="{String(manager.managerSalary)}"
                placeholder="manager@ocso.com"
                name="12000"
            />
            <Input
                defaultValue="{String(manager.managerPhoneNumber)}"
                placeholder="manager@ocso.com"
                name="4425874686"
            />
            <SelectStore
                stores={stores}
                defaultStore={manager?.location?.locationId}
            />
            <Button color="primary" type="submit" className="bg-orange-500">
                Actualizar
            </Button>
        </form>
    )
}