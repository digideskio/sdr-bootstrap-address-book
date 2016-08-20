/**
 * Created by Olexiy Lyhun on 18.08.2016.
 */
const getList = () => (state) => state.get('chatLoader').chatList;

export {
    getList
};