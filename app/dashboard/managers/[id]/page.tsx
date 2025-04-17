import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import ManagerCard from "./_components/ManagerCard";

export default async function ManagerPaga({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const headers = await authHeaders();
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...headers,
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
        }
    });
    const data: Manager = await response.json();
    return (
        <div>
            <ManagerCard manager={data} />
        </div>
        
    )
}