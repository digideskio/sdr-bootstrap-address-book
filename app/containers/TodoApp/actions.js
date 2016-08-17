/**
 * Created by DMedzatiy on 16-Aug-16.
 */

export function newUserName(userName) {
    return {
        type: "CHANGE_USERNAME",
        userName,
    };
}