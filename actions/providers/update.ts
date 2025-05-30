'use server';
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache"; // Replace "some-module-path" with the correct module path

export default async function updateProvider(providerId: string, formData: FormData){
    let provider: any = {};
    for (const key of Array.from(formData.keys())) {
        provider[key] = formData.get(key);
    }
    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "PATCH",
        body: JSON.stringify(provider),
        headers: {
            ...await(authHeaders()),
        },
    })
    if (response.status === 200) revalidateTag("dashboard:providers")
}