import {toasts} from "./data.js";

/**
 * @return {string[]}
 */
export async function load() {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(v => v.json())

    console.log(todos)

    return {toasts: toasts}
}
