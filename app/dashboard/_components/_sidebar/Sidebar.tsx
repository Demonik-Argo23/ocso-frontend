import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from './NavItem';

export default function Sidebar(){
    return (
        <aside className="w-20 min-w-[80px] h-[calc(100vh-64px)] bg-white shadow-lg flex flex-col items-center py-10 gap-6">
            <NavItem icon={<LuStore className="text-3xl" />} path="/dashboard"/>
            <NavItem icon={<LuTruck className="text-3xl" />} path="/dashboard/providers"/>
            <NavItem icon={<LuWheat className="text-3xl" />} path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-3xl" />} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-3xl" />} path="/dashboard/employees"/>
        </aside>
    )
}