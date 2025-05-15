"use server";

import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData) {
    formData.delete("$ACTION_REF_0")
    formData.delete("$ACTION_REF_0:1")
    formData.delete("$ACTION_REF_0:0")
    const response = await fetch(`${process.env.API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ...await authHeaders()
        },
        body: formData,
    })
    if (response.status === 200) revalidateTag("dashboard/employees");
    return;
}