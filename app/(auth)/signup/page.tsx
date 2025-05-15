'use client';
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "@/constants";

export default function SignUpPage() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);
        const data = {
            userEmail: formData.get("userEmail"),
            userPassword: formData.get("userPassword"),
        };
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.status === 201) {
                alert("Usuario registrado correctamente");
            } else {
                alert("Error al registrar usuario");
            }
        } catch (err) {
            alert("Error de red");
        }
        setSubmitting(false);
    };

    return (
        <form className="bg-orange-500 px-18 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white"> Registrate <span> </span> </p>
            <div className="flex flex-col gap-2 my-4 mx-8 items-center text-left">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" className="text-black" radius="md"/>
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" className="text-black"/>
                <Input label="Repetir contraseña" name="repeatPassword" type="password" isRequired={true} size="sm" className="text-black"/>
            </div>
            <div className="flex flex-col item-center gap-3">
                <div className="my-4 bg-blue-700 flex flex-col">
                    <Button color="primary" radius="md" type="submit" disabled={submitting}>
                        {submitting ? "Registrando..." : "Registrarse"}
                    </Button>
                </div>
                <p className="text-white">¿Ya tienes una cuenta? <Link href='login' className="text-blue-500 underline">Inicia sesión</Link></p>
            </div>
        </form>
    );
}