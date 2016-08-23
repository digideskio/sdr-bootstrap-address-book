export function fetchSendPost(newComment) {
     return fetch('/post', {
         method: 'post',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },

         body: JSON.stringify(newComment)
     });

}

export function fetchGetPosts() {
    return fetch('/init').then(
        response => response.json());
}
