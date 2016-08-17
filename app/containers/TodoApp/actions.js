/**
 * Created by DMedzatiy on 16-Aug-16.
 */

export function onIncrementCounter(name) {
    return {
        type: "INCREMENT_COUNTER_VALUE",
        name: name,
    };
}
export function onIncrement(index) {
    return {
        type: "INCREMENT",
        index,
    };
}
export function onDecrement() {
    return {
        type: "DECREMENT"
    };
}