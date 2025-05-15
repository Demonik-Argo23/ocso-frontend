import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button } from "@heroui/react";
import { Input } from "@nextui-org/react";

export default function FormUpdateEmployee({employee}: {employee: Employee}) {
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-4 w-full h-full p-10 overflow-y-auto bg-white"> 
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
            <Input label="Apellido" name="employeeLastName" defaultValue={employee.employeeLastName} />
            <Input label="Correo Electrónico" name="employeeEmail" defaultValue={employee.employeeEmail} />
            <Input label="Número Telefónico" name="employeePhoneNumber" defaultValue={employee.phoneNumber} />
            <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto} />
            <Button type="submit" >
                Actualizar Datos
            </Button>
        </form>
    )
}