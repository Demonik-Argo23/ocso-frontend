import {Input, Button} from "@heroui/react"
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-orange-500 px-18 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">
                Iniciar Sesion 
            </p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" 
                isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" 
                isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col item-center gap-3">
            <Button color="primary">Iniciar Sesión</Button>
                <p>No tienes una cuenta? <Link href='signup' className="text-blue-500 underline">Registrate</Link></p>
            </div>
        </div>
    );
}