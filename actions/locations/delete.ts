import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(FormData: FormData) {
    const locationId = FormData.get("deleteValue");
    if (!locationId) {
        return;
    }
    const headers = await authHeaders();
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    await fetch(`${API_URL}/locations/${locationId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
        }
    });
    revalidateTag("dashboard:locations");
    redirect("/dashboard")
}