"use server";

import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(employeeId: string, formData: FormData) {
    formData.delete("$ACTION_REF_0")
    formData.delete("$ACTION_REF_0:1")
    formData.delete("$ACTION_REF_0:0")
    const response = await fetch(`${process.env.API_URL}/employees/${employeeId}`, {
        method: "DELETE",
        headers: {
            ...await authHeaders()
        },
        body: formData,
    })
    if (response.status === 200) {
        revalidateTag("dashboard/employees");
        redirect("/dashboard/employees");
    }
    return;
}