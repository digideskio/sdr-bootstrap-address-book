export function postComment(comment) {
    return {
      type: 'POST_COMMENT',
      comment: comment
    }
}
