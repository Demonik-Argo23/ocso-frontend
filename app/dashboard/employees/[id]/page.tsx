import EmployeeCard from "../_components/EmployeeCard";

export default async function EmployeePage({params} : {params: {id: string}}) {
    // Fetch employee data here, for example:
    const res = await fetch(`${process.env.API_URL}/employees/${params.id}`);
    const employee = await res.json();

    return <EmployeeCard employee={employee} />
}