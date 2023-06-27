export interface ApiResponse<T> {
    limit: number
    skip: number
    total: number
    products: ReadonlyArray<T>
}