interface User {
    TgId: number,
    username?: string,
    name: string,
    point: number,
    refer_code: string,
    refer_by?: string,
    wallet?: string,
    is_Verify: boolean,
    is_newcomer: boolean,
    createdAt?: string,
    updatedAt?: string
};

export default User;