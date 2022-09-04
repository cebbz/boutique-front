import type { ProductInterface } from "@/interfaces/Product.interface";

export interface ProductCartInterface extends ProductInterface {
    quantity: number;
}