/**
 * Created by Admin on 22.08.2016.
 */

export function addNickname (newNickname) {
    return {
        type: "ADD_NICKNAME",
        newNickname: newNickname
    }
}

export function delNickname (nicknameIndex) {
    return {
        type: "DEL_NICKNAME",
        nicknameIndex: nicknameIndex
    }
}

export function changeNick (nicknameIndex) {
    return {
        type: "CHANGE_CURRENT_NICK",
        nicknameIndex: nicknameIndex
    }
}