"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateManager(managerId: string, formData: FormData) {
    let manager: any = {};
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (typeof value === "string") {
            manager[key] = value;
        }
    }
    manager['managerSalary'] = +manager['managerSalary'];
    manager.location = +manager.location;
    if(!manager?.location) delete manager?.location;
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: 'PATCH',
        body: JSON.stringify(manager),
        headers: {
            ...(await authHeaders() || {}),
            'content-type': 'application/json',
        },
    })
    if (response.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:manager:${managerId}`)
    };
}