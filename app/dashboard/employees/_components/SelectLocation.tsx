'use client'

import { Location } from "@/entities"
import { Select, SelectItem } from "@heroui/react"
import { SocketAddress } from "net"

export default function SelectLocations({ stores, defaultStore }: { stores: Location[], defaultStore?: number | undefined }) {
    return (
        <Select label="Tienda" name="location" defaultSelectedKeys={defaultStore ? [defaultStore] : undefined}>
            {
                stores.map((store: Location) => (
                    <SelectItem key={String(store.locationId)}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}