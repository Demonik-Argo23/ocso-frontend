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
                    body: JSON.stringify(authData),
                    credentials: "include",
                });
            if (response.status === 201) {
                router.push("/dashboard");
            }
            setSubmitting(false);
        } catch (e: any) {
            console.error("Error during login:", e.response?.data || e.message);
            setSubmitting(false);
        }
    };
    return (
        <form
            className="bg-orange-700 px-10 py-2 rounded-md"
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
                ></Input>
                <Input
                    label="Contraseña"
                    name="userPassword"
                    type="password"
                    isRequired={true}
                    size="sm"
                ></Input>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit" disabled={submitting}>
                    {submitting ? "Enviando..." : "Iniciar sesion"}
                </Button>
                <p className="text-white">
                    ¿Tienes cuenta?{" "}
                    <Link href="/signup" className="text-orange-400 underline">
                        Registrate
                    </Link>
                </p>
            </div>
        </form>
    );
}