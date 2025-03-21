import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from './NavItem'; // Adjust the import path as necessary

export default function Sidebar(){
    return (
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-7">
            <NavItem icon={<LuStore className="text-4xl text-black"/>} path="/dashboard"/>
            <NavItem icon={<LuTruck className="text-4xl text-black"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuWheat className="text-4xl text-black"/>} path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-4xl text-black"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-4xl text-black"/>} path="/dashboard/employees"/>
        </nav>
    )
} 