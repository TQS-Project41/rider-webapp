import { Address } from "./Address"
import { Shop } from "./Shop"

export interface Delivery {
    id: number
    deliveryTimestamp: Date
    deliveryAddress: Address
    client: string
    shop: Shop
    courier: any
    status: string
}