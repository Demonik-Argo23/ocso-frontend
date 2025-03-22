"use client";
import {Input, Button} from "@heroui/react"
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";

export default function LoginPage() {
        const handleSubmit = async (e : React.FormEvent) => {
            e.preventDefault ()
            const formData = new FormData(e.target);
            let authData: any = {};
            authData.userEmail = formData.get('userEmail');
            authData.userPassword = formData.get('userPassword');
            const { data } = await axios.post(`${API_URL}/auth/login`, {
                ...authData
            }, {
                withCredentials: true
            });
            console.log(data);
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
            <Button color="primary" type="submit">Iniciar Sesión</Button>
                <p>No tienes una cuenta? <Link href='signup' className="text-blue-500 underline">Registrate</Link></p>
            </div>
        </form>
    );
}