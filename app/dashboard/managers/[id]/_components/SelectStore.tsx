'use client'

import { Location } from "@/entities"
import { Select, SelectItem } from "@heroui/react"
import { SocketAddress } from "net"

export default function SelectStore({ stores, defaultStore }: { stores: Location[], defaultStore: number }) {
    const disabledStores = stores.map((store: Location) => {
        if (store.manager !== undefined) {
            return String(store.locationId)
        }
    }).filter((storeId) => storeId !== undefined)
    return (
        <Select defaultSelectedKeys={defaultStore ? [defaultStore] : undefined} disabledKeys={disabledStores}>
            {
                stores.map((store: Location) => (
                    <SelectItem key={store.locationId}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}