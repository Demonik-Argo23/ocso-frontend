import { API_URL } from "@/constants";
import { Employee, Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ListEmployees from "./_components/ListEmployees";
import FormCreateEmployee from "./_components/FormCreateEmployee";
import CreateEmployee from "./_components/CreateEmployee";

const EmployeesPage = async () => {
    const responseEmployees = await fetch(`${API_URL}/employees`, {
        headers: {
            ...await (authHeaders())
        },
        next: {
            tags: ["dashboard/employees"],
        }
    });
    const dataEmployees = await responseEmployees.json();

    const employees: Employee[] = Array.isArray(dataEmployees)
        ? dataEmployees
        : Array.isArray(dataEmployees?.data)
            ? dataEmployees.data
            : Array.isArray(dataEmployees?.employees)
                ? dataEmployees.employees
                : [];

    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...await (authHeaders())
        },
        next: {
            tags: ["dashboard/employees"],
        }
    });
    const dataLocations = await responseLocations.json();

    const locations: Location[] = Array.isArray(dataLocations)
        ? dataLocations
        : Array.isArray(dataLocations?.data)
            ? dataLocations.data
            : Array.isArray(dataLocations?.locations)
                ? dataLocations.locations
                : [];

    return (
        <div className="relative w-full h-[90vh] bg-white overflow-y-auto p-10 flex flex-col">
            <div className="flex-1 overflow-y-auto">
                <ListEmployees employees={employees} locations={locations} />
            </div>
            {/* Botón flotante para crear empleado */}
            <div className="fixed bottom-8 right-8 z-50">
                <CreateEmployee icon={<span>+</span>}>
                    <FormCreateEmployee />
                </CreateEmployee>
            </div>
        </div>
    )
}

export default EmployeesPage;