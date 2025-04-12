import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { authHeaders } from "@/helpers/authHeaders";
export default async function deleteLocation(FormData: FormData) {
    const locationId = FormData.get("deleteValue");
    if (!locationId) {
        return;
    }
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    if (!token) {
        throw new Error("Authentication token is missing");
    }
    const headers = await authHeaders();
    await fetch(`${API_URL}/locations/${locationId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
        },
    });
}