import { SERVER } from "./constants.js";
import { Http } from "./http.class.js";
import { Product, ProductInsert } from "./interfaces/product.js";
import { ProductsResponse, SingleProductResponse } from "./interfaces/responses.js";

export class ProductService {
    #http = new Http();

    async getAll(): Promise<Product[]> {
        const resp = await this.#http.get<ProductsResponse>(`${SERVER}/products`);
        return resp.products;
    }

    async insert(product: ProductInsert): Promise<Product> {
        const resp = await this.#http.post<SingleProductResponse, ProductInsert>(`${SERVER}/products`, product);
        return resp.product;
    }

    async delete(id: number): Promise<void> {
        await this.#http.delete<void>(`${SERVER}/products/${id}`);
    }
}

