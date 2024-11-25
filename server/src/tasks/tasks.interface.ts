interface task {
    _id?: string,
    type: string,
    category: string,
    title: string,
    point: number,
    href: string,
    createdAt?: string,
    updatedAt?: string
}

export default task;