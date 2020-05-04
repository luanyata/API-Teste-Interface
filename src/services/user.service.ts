import { User, ListUser } from "../models/user";
import { LIST_USER } from "../mock";

let list = LIST_USER;

export class UserService {
  public getAll(): ListUser[] {

    const listUser: ListUser[] = list.map(user => {

      const { id, name, login, company } = user;
      let newUser: ListUser = {
        id,
        name,
        login,
        company
      }
      return newUser
    })

    return listUser;
  }

  public get(id: number): User {
    if (!id) throw Error("Id do usuário não informado");

    console.log(`Id usado para recuperar o Usuário ${id}`);

    const user = list.find(user => user.id === id)

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
          e.login = user.login;
          e.company = user.company
          e.password = user.password;
          e.street = user.street;
          e.city = user.city;
          e.country = user.country;
          e.zip = user.zip
          e.phoneNumber = user.phoneNumber
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
