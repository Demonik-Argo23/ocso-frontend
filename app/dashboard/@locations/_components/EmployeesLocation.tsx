import axios from "axios";
import { Employee } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined}) {
    const cookiesData = await cookies();
    const token = cookiesData.get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data.map((employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
            return (
                <Card className="mx-10 my-10">
                    <CardHeader>
                        <p className="w-full"> Nombre: <b>{fullName}</b></p>                        
                    </CardHeader>
                    <Divider/>
                        <CardBody>
                        <p className="w-full"> Email: <b>{employee.employeeEmail}</b></p>
                        <p className="w-full"> Teléfono: <b>{employee.phoneNumber}</b></p>                            
                        </CardBody>
                </Card>
            )
        })
    
}