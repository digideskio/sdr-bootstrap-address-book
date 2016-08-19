/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
export function newList(list) {
    return {
        type: "CHANGE_LIST",
        newList: list,
    };
}