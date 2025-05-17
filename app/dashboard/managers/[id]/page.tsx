import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "../_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

export default async function ManagerPaga({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const headers = await authHeaders();
    const response = await fetch(`${API_URL}/managers/${resolvedParams.id}`, {
        headers: {
            ...headers,
        },
        next: {
            tags: [`dashboard:managers:${resolvedParams.id}`, `dashboard:managers`],
        }
    });
    const data: Manager = await response.json();
    return (
        <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
            <ManagerCard manager={data} />
            <div className="bg-white shadow-medium rounded-md px-10 py-2 flex flex-row flex-grow-0 gap-3">
            <DeleteManagerButton managerId={data.managerId} />
            <UpdateManager>
                <FormUpdateManager manager={data} />
            </UpdateManager>
            </div>
        </div>

    )
}
