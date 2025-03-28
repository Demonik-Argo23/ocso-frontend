'use client';
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/react";
import { Location } from "@/entities";
export default function SelectLocation({
    locations, 
    store 
}: { 
    locations: Location[], 
    store: string | string[] | undefined 
}) {
    
    const router = useRouter();
    return (
        <Select placeholder="Selecciona una tienda"
            label="Tienda"
            classNames={{
                mainWrapper: "hover:ring-2 ring-red-300 rounded-x1 transition-all",
            }}
            selectedKeys={store ? store : "0"}
            onChange={((e) => {
                if (e.target.value === "0" || e.target.value === "") {
                    router.push('/dashboard')
                } else {
                    router.push(`/dashboard/@locations/${e.target.value}`);
                }
            })}
        >
            {locations.map((location) => {
                return (
                    <SelectItem key={location.locationId} value={location.locationId}>
                        {location.locationName}
                    </SelectItem>
                );
            })}
        </Select>
    )
}