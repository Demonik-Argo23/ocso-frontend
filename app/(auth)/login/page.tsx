"use client";
import { Input, Button } from "@heroui/react"
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";
import React from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
    const [submitting, setSubmitting] = React.useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        let authData: any = {};
        authData.userEmail = formData.get('userEmail');
        authData.userPassword = formData.get('userPassword');
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                ...authData
            }, {
                withCredentials: true
            });
            if (response.status === 201) {
                router.push('/dashboard');
            }
            setSubmitting(false);
        } catch (e) {
            setSubmitting(false);
        }
        return;
    }
    return (
        <form className="bg-orange-500 px-18 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">
                Iniciar Sesion
            </p>
            <div className="flex flex-col gap-2 my-4 items-center text-black">
                <Input label="Email" type="email" name="userEmail" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" name="userPassword" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col item-center gap-3">
                <Button 
                color="primary" 
                type="submit"
                disabled={submitting}>
                    {submitting ? 'Cargando...' : 'Iniciar Sesion'}
                </Button>
                <p>No tienes una cuenta? <Link href='signup' className="text-blue-500 underline">Registrate</Link></p>
            </div>
        </form>
    );
}