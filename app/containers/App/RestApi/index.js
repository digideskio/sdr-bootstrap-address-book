export function fetchPost(newComment) {
     return fetch('/post', {
         method: 'post',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },

         body: JSON.stringify(newComment)
     });

}
