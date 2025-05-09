"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export default async function updateProduct(productId: string, formData: FormData) {
    let product: any = {};
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (typeof value === "string") {
            product[key] = value;
        }
        if (!key.includes("ACTION")) {
            product[key] = formData.get(key);
        }
    }
    product.price = +product.price;
    product.countSeal = +product.countSeal;
    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'PATCH',
        body: JSON.stringify(product),
        headers: {
            ...(await authHeaders() || {}),
            'content-type': 'application/json',
        },
    })
    if (response.status === 200) {
        revalidateTag("dashboard:products")
        revalidateTag(`dashboard:product:${productId}`)
    };
}