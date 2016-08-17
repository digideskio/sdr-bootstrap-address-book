/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */

export function newItemToList(item) {
    return {
        type: "CHANGE_LIST",
        userName: item,
    };
}