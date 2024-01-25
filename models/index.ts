export interface IDrink {
    id: number
    name: string
    instructions: string
    image: string
    category: string
    created_at?: string
    updated_at?: string
}

export interface Filter {
    name: string
    category: string
}
