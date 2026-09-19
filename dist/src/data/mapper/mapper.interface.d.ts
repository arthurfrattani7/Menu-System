export type UserMapperI = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
};
export type CoupleMapperI = {
    id: string;
    userOneId: string;
    userTwoId: string;
    createdAt: Date;
};
