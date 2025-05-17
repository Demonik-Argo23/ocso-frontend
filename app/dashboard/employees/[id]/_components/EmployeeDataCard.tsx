import { Employee } from "@/entities";
import { Image, Link } from "@heroui/react";
import DeleteEmployee from "./DeleteEmployee";
import CreateUser from "./CreateUser";
import { LuUser } from "react-icons/lu";
import FormCreateUserEmployee from "./FormCreateUser";

export default function EmployeeDataCard({ employee }: { employee: Employee }) {
    return (
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 m-2">
            <div className="text-xl flex flex-col h-full justify-between ">
                <div className="h-full py-10">
                    <h1 className="font-bold">
                        {employee.employeeName + " " + employee.employeeLastName}
                    </h1>
                    <h1>{employee.employeeEmail}</h1>
                    <h1>{employee.phoneNumber}</h1>
                </div>
                <div>
                    <DeleteEmployee employeeId={employee.employeeId} />
                </div>

                <Link
                    className="underline"
                    href={`/dashboard?store=${employee?.location?.locationId ?? ""}`}
                >
                    <h1>{employee?.location?.locationName}</h1>
                </Link>

            </div>
            <div className="h-full py-20 w-1 bg-zinc-300 mx-6" />
            {<CreateUser icon={<LuUser size={20}/>} photo={employee.employeePhoto}>
                {
                    employee && (
                        <FormCreateUserEmployee employee={employee}/>
                    )
                }
            </CreateUser>}
        </div>
    )
}