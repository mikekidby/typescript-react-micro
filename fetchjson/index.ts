import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//response todo interface 
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed
    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, done: boolean) => {
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${done}
    `);
};