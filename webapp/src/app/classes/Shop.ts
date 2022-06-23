import { Address } from "./Address"
import { BusinessShop } from "./BusinessShop"

export interface Shop {
    id: number
    name: string
    address: Address
    business: BusinessShop
}