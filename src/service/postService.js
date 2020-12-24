export default class PostService{
    url = 'http://jsonplaceholder.typicode.com/posts'

    async posts(){
        return await fetch(this.url).then(value => value.json());

    }

    onePost(id){
        return fetch(this.url + '/' + id).then(value => value.json());
    }

};