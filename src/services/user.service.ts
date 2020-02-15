import { User, ListUser } from "../models/user";
import { LIST_USER } from "../mock";

let list = LIST_USER;

export class UserService {
  public getAll(): ListUser[] {
    return list;
  }

  public get(id: number): User {
    if (!id) throw Error("Id do usuário não informado");

    console.log(`Id usado para recuperar o Usuário ${id}`);

    const user: User = {
      id: id,
      name: "Audra",
      lastname: "Tanek",
      login: "audra.tanek",
      password: "XAK46PTH6HG",
      dateNasc: "Thu Oct 25 2018 14:24:25 GMT-0300 (Brasilia Standard Time)",
      contact: {
        phones: [
          { id: 1, value: "99999-9999" },
          { id: 2, value: "88888-8888" },
          { id: 3, value: "77777-7777" },
          { id: 4, value: "66666-6666" }
        ],
        emails: [{ id: 1, value: "arcu.Vestibulum.ut@amet.org" }]
      },
      address: {
        street: "Rua Orlando Phillipi",
        city: "Florianopolis",
        state: "SC",
        country: "Brasil",
        zip: "88.500-000"
      }
    };
    return user;
  }

  public delete(id: number): boolean {
    if (!id) throw Error("Id do usuário não informado");
    list.filter(user => user.id !== id);
    return true;
  }

  public save(user: User): User {
    if (user.id) {
      list.map(e => {
        if (e.id === user.id) {
          e.name = user.name;
          e.lastname = user.lastname;
          e.login = user.login;
          e.password = user.password;

          return e;
        }
      });
    } else {
      user.id = list.length + 1;
      list.push(user);
    }
    return user;
  }
}
