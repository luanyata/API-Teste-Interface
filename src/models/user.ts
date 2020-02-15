export class User {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public dateNasc: string,
        public login: string,
        public password: string,
        public address: Address,
        public contact: Contact
    ) { }
}

export class Address {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public country: string,
        public zip: string,
    ) { }
}

export class Contact {
    constructor(
        public phones: TypeContact[],
        public emails: TypeContact[]
    ) { }
}

export class ListUser {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public login: string,
        public password: string,

    ) { }
}

export class TypeContact {
    constructor(
        public id: number,
        public value: string
    ) { }
}