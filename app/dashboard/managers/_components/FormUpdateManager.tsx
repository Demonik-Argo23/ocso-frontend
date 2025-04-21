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
        }} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
            <h1 className="text-2x1 text-white font-semibold text-center"> Actualizar Manager </h1>
            <Input
                required={true}
                label="Nombre completo" 
                defaultValue="{manager.managerFullName}"
                placeholder="Marco Aurelio"
                name="managerFullName"
            />
            <Input
                required={true}
                label="Correo Electrónico" 
                defaultValue="{manager.managerEmail}"
                placeholder="maurelio@gmail.com"
                name="managerEmail"
            />
            <Input
                required={true}
                label="Salario" 
                defaultValue="{String(manager.managerSalary)}"
                placeholder="12000"
                name="Salario"
            />
            <Input
                required={true}
                label="Número de teléfono" 
                defaultValue="{String(manager.managerPhoneNumber)}"
                placeholder="4425874686"
                name="Telefono"
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