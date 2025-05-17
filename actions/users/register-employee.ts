"use server";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function registerEmployee(employeeId: string, formData: FormData) {
    let data: any = {};
    data.userEmail = formData.get("userEmail");
    data.userPassword = formData.get("userPassword");
    data.userRoles = "Employee";

    const response = await fetch(`${API_URL}/auth/register/${employeeId}?role=employee`, {
        method: "POST",
        headers: {
            ...await authHeaders(),
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(response);
}