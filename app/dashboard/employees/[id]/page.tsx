import EmployeeCard from "../_components/EmployeeCard";

export default async function EmployeePage({params} : {params: Promise<{id: string}>}) {
    const resolvedParams = await params;
    // Fetch employee data here, for example:
    const res = await fetch(`${process.env.API_URL}/employees/${resolvedParams.id}`);
    const employee = await res.json();

    return <EmployeeCard employee={employee} />
}