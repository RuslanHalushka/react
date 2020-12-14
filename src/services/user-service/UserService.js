export class UserService{

    url ='http://jsonplaceholder.typicode.com/users';

    getAllUsers = () =>{
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value);
    }

    getSomeUser = (id) =>{
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value);
    }
}