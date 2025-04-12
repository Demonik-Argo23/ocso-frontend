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
    const token = cookies().get(TOKEN_NAME)?.value
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: 'DELETE',
        headers: {
            ...authHeaders(),
        }
    })
    revalidateTag("dashboard:locations");
    redirect("/dashboard")
}