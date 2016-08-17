/**
 * Created by DMedzatiy on 16-Aug-16.
 */

const initialState = {
    counters: [
        {
            name: "Olexiy",
            value: 0
        },
        {
            name: "Serhii",
            value: 0
        },
        {
            name: "Dima",
            value: 0
        }
    ]
};

function todoAppReducer (state=initialState, action) {
    switch (action.type) {
        case "INCREMENT_COUNTER_VALUE": {
            return Object.assign({},
                state,
                {counters: state.counters.map((x)=>{
                    if (x.name==action.name) {
                        return {
                            name: x.name,
                            value: x.value + 1
                        }
                    }
                    else {
                        return x;
                    }
                    })
                }
            )}
        case "DECREMENT_COUNTER_VALUE":
            return Object.assign({},
                state,
                {counters: state.counters.map((x)=> {
                    if (x.name==action.name) {
                        return {
                            name: x.name,
                            value: x.value-1
                        }
                    }
                })}
            );
        case "ADD_COUNTER":
            return state;
        case "DELETE_COUNTER":
            return state;
        default:
            return state;
    }
}

export default todoAppReducer;