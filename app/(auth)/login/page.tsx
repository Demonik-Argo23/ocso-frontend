'use client';
import { API_URL } from "@/constants";
import { Input, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        console.log("handleSubmit ejecutado");
        setSubmitting(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        let authData: any = {};
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        try {
            const response = await fetch(
                `${API_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(authData),
                    credentials: "include",
                });
            const responseBody = await response.text();
            console.log("Status:", response.status, "Body:", responseBody);
            if (response.status === 200 || response.status === 201) {
                console.log("Redirigiendo al dashboard...");
                router.push("/dashboard");
                console.log("Push ejecutado");
            } else {
                alert("Error al iniciar sesión: " + responseBody);
                console.error("Login failed:", response.status, responseBody);
            }
            setSubmitting(false);
        } catch (e: any) {
            console.error("Error during login:", e.response?.data || e.message);
            setSubmitting(false);
        }
    };
    return (
        <form
            className="bg-orange-500 px-10 py-2 rounded-md"
            onSubmit={handleSubmit}
        >
            <p className="text-2xl my-4">Iniciar sesion</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input
                    label="Email"
                    name="userEmail"
                    type="email"
                    isRequired={true}
                    size="sm"
                    className="text-black w-80 mx-4"
                    radius="md"
                ></Input>
                <Input
                    label="Contraseña"
                    name="userPassword"
                    type="password"
                    isRequired={true}
                    size="sm"
                    className="text-black w-80 mx-4"
                    radius="md"
                ></Input>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit" disabled={submitting}>
                    {submitting ? "Enviando..." : "Iniciar sesion"}
                </Button>
                <p className="text-white">
                    ¿Tienes cuenta?{" "}
                    <Link href="/signup" className="text-blue-700 underline">
                        Registrate
                    </Link>
                </p>
            </div>
        </form>
    );
}