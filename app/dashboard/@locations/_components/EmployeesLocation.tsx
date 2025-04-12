import { Employee as BaseEmployee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

// Extend the Employee type to include employeePhoneNumber
interface Employee extends BaseEmployee {
    employeePhoneNumber: string;
}

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: 'GET',
        headers: await authHeaders(),
    });
    const data: Employee[] = await response.json();
    return data.map((employee: Employee) => {
        const fullname = employee.employeeName + " " + employee.employeeLastName;
        return <Card className="mx-10 my-10">
            <CardHeader>
                <p className="w-full">Nombre: <b>{fullname}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
        </Card>
    });
}
