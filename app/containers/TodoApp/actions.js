/**
 * Created by DMedzatiy on 16-Aug-16.
 */

export function newUserName(userName) {
    return {
        type: "CHANGE_USERNAME",
        userName: userName.target.value,
    };
}
export function onIncrement() {
    return {
        type: "INCREMENT"
    };
}
export function onDecrement() {
    return {
        type: "DECREMENT"
    };
}