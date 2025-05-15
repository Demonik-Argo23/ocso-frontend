import { Manager } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";
import Link from "next/link";

export default async function ManagerCards() {
    const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...(await authHeaders())
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    const data: Manager[] = await response.json();
    return (
        <div className="flex flex-col gap-6">
            {data?.map((manager: Manager) => (
                <Link href={{ pathname: `/dashboard/managers/${manager.managerId}` }} key={manager.managerId}>
                    <Card className="hover:scale-105 hover:bg-orange-50 transition-all cursor-pointer shadow-md rounded-xl">
                        <CardHeader>
                            <p className="font-semibold text-lg text-orange-600">
                                {manager.managerFullName}
                            </p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="text-gray-700">
                                <span className="font-medium">Email:</span> {manager.managerEmail}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">Teléfono:</span> {manager.managerPhoneNumber}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">Salario:</span> ${manager.managerSalary}
                            </p>
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </div>
    );
}