interface Base {
    id: number;
    name: string;
    login: string;
    company: string;
}


export interface User extends Base {
    password: string;
    street: string;
    city: string;
    country: string;
    zip: string;
    phoneNumber: string;

}

export type ListUser = Base;