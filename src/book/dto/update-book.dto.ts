import { Category } from "../schemas/book.schemas"

export class updateBookDto {
    readonly title: string
    readonly description: string
    readonly author: string
    readonly price: number
    readonly category: Category
}