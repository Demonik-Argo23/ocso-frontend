"use client";
import { createEmployee } from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { Button } from "@heroui/react";
import { Input } from "@nextui-org/react";
import SelectLocations from "./SelectLocation";
import { useEffect, useState } from "react";

export default function FormCreateEmployee() {
    const [locations, setLocations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocations = async () => {
            const response = await fetch(`${API_URL}/locations`, { cache: "no-store" });
            const data = await response.json();
            setLocations(
                Array.isArray(data)
                    ? data
                    : Array.isArray(data?.data)
                        ? data.data
                        : Array.isArray(data?.locations)
                            ? data.locations
                            : []
            );
            setLoading(false);
        };
        fetchLocations();
    }, []);

    if (loading) return <div className="p-4">Cargando ubicaciones...</div>;

    return (
        <form action={createEmployee} className="flex flex-col gap-4 w-full h-full p-10 overflow-y-auto bg-white">
            <Input isRequired label="Nombre" name="employeeName" />
            <Input isRequired label="Apellido" name="employeeLastName" />
            <Input isRequired label="Correo Electrónico" name="employeeEmail" />
            <Input isRequired label="Número Telefónico" name="employeePhoneNumber" />
            <Input isRequired type="file" name="employeePhoto" />
            <SelectLocations stores={locations} />
            <Button type="submit" color="primary" className="w-full">
                Crear Empleado
            </Button>
        </form>
    );
}