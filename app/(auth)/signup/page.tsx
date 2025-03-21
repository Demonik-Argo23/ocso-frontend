import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="bg-orange-500 px-18 py-2 rounded-md">
            <p className="text-2xl my-4 text-white"> Registrate <span> </span> </p>
            <div className="flex flex-col gap-2 my-4 mx-8 items-center text-left">
                <Input label="Email" type="email" isRequired={true} size="sm" className="text-black" radius="md"/>
                <Input label="Contraseña" type="password" isRequired={true} size="sm" className="text-black"/>
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" className="text-black"/>
            </div>
            <div className="flex flex-col item-center gap-3">
                <div className="my-4 bg-blue-700 flex flex-col">
                    <Button color="primary" radius="md">Registrarse</Button>
                </div>
                    <p className="text-white">¿Ya tienes una cuenta? <Link href='login' className="text-blue-500 underline">Inicia sesión</Link></p>
            </div>
        </div>
    )
}