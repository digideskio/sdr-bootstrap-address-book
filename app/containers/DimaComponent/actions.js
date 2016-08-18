/**
 * Created by DMedzatiy on 17-Aug-16.
 */

export function onAddTodo (todo) {
    return {
        type:"ON_ADD_TODO",
        todo: todo
    };
}

export function onToggleTodo (index) {
    return {
        type: "ON_TOGGLE_TODO",
        index: index
    };
}