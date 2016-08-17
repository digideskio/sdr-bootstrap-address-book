/**
 * Created by DMedzatiy on 16-Aug-16.
 */

export function onIncrementCounter(name) {
    return {
        type: "INCREMENT_COUNTER_VALUE",
        name: name,
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
