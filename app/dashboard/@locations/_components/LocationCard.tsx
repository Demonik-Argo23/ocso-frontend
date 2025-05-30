import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({
    store,
}: {
    store: string | string[] | undefined;
}) {
    if (!store) return null;
    const headers = await authHeaders();
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...headers,
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`],
        },
    });
    const data: Location = await response.json();
    return (
        <Card>
            <CardHeader>
                <b className="w-full text-2x1">{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col w-full items-center">
                <p className="w-full">
                    Manager: {" "}
                    <Link href={{ pathname: `/dashboard/managers/${data.manager ?.managerId}` }}>
                        <b className="underline">{data.manager?.managerFullName}</b>
                    </Link>
                </p>
            </CardBody>
        </Card>
    );
}