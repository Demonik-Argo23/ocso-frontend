import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="bg-orange-500 px-18 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">Registrarse en <span> </span> </p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col item-center gap-3">

            <Button color="primary">Registrarse</Button>
                <p className="text-white">¿Ya tienes una cuenta? <Link href='login' className="text-blue-500 underline">Inicia sesión</Link></p>
            </div>
        </div>
    )
}