"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";

export default async function deleteLocation(formData: FormData){
    const locationId = formData.get("deleteValue")
    if (!locationId) return;
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}