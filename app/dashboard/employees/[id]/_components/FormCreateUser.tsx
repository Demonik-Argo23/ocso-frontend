"use client"
import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserEmployee({ employee }: { employee: Employee }) {
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const { employeeId } = employee;
    const registerEmployeeById = registerEmployee.bind(null, employeeId);
    return (
        <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
            <h1 className="text-black text-xl font-bold text-center"> Crear Usuario </h1>
            <Input name="userEmail" label="Correo de cuenta" />
            <Input
                value={password}
                type={visible ? "text" : "password"}
                name="userPassword"
                label="Contraseña"
                endContent={
                    <button
                        type="button"
                        onMouseUp={
                            () => setVisible(false)}
                        onMouseDown={
                            () => setVisible(true)
                        }>
                        <LuEye />
                    </button>
                }
            />
            <Button onPress={() => {
                setPassword(generate({
                    length: 10
                }))
            }}>

            </Button>
        </form>
    )
}