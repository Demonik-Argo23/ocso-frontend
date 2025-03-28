import { Location } from "@/entities";
import axios from "axios";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
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
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            ...headers
        }
    })
    return (
        <Card>
            <CardHeader>
                <b className="w-full"> {data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Manager: <Link href={{ pathname: `/dashboard/managers` }}><b>{data.manager?.managerFullName}</b></Link></p>
            </CardBody>
        </Card>
    )
}