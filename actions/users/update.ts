"use server";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function UpdateUser(userId: string, formData: FormData) {
    let data: any = {};
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined;
    data.userPassword = formData.get("userPassword") ? formData.get("userPassword") : undefined;

    const response = await fetch(`${API_URL}/auth/${userId}`, {
        method: "PATCH",
        headers: {
            ...await authHeaders(),
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(response);
}