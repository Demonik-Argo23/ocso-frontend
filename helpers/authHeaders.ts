import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { cache } from "react";

export const authHeaders = cache(async () => {
    const cookiesStore = cookies(); // Directly call cookies without awaiting
    const token = (await cookiesStore).get(TOKEN_NAME)?.value; // Await the promise to access 'get'
    return {
        "Authorization": `Bearer ${token}`,
    };
});