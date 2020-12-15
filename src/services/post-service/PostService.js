export class PostService{

    url = 'http://jsonplaceholder.typicode.com/posts'

    getAllPosts = () =>{
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value);
    }

    getSomePost = (id) =>{
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value);
    }
}