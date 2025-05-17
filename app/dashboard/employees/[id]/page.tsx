import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";

export default async function EmployeePage({
    params,
}: {
    params: { id: string };
}) {
    const responseEmployee = await fetch(`${process.env.API_URL}/employees/${params.id}`, {
        headers: {
            ...await authHeaders()
        },
    });
    const employee: Employee = await responseEmployee.json();
    return (
        <div className="w-full h-[90vh] flex flex-row justify-center">
            <EmployeeDataCard employee={employee} />
            <FormUpdateEmployee employee={employee} />
        </div>
    )
}