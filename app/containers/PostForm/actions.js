export const postComment = (comment) => {
    return {
        comment,
        type: 'POST_COMMENT',
    }
}

export const changeCurrentComment = (currentComment) => {
    return {
        currentComment,
        type: 'CHANGED_CURRENT_COMMENT',
    }
}
