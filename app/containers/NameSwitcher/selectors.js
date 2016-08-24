/**
 * Created by Admin on 22.08.2016.
 */

const getCurrentNickname = () => state => state.get('nicknames').nicknamesList[state.get('nicknames').currentNickIndex];

const getNicknamesList = () => state => state.get('nicknames').nicknamesList;

const getCurrentNickIndex = () => state => state.get('nicknames').currentNickIndex;

export {
    getCurrentNickname,
    getNicknamesList,
    getCurrentNickIndex
};