export default class CommentService{
    url = 'https://jsonplaceholder.typicode.com/comments';

    async comments(){
        return await fetch(this.url).then(value => value.json());
    }
    oneComment(id){
        return fetch(this.url + '/' + id).then(value => value.json());
    }
}