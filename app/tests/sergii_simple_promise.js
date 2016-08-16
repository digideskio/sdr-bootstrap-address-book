//PromiseState
//PromiseResult
//PromiseFulfillReactions: []
//PromiseRejectReactions: []
function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if(this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

httpGet('https://api.github.com/users/Corvuscoraxpy').then(
  response => {
    console.log(response);
    let user = JSON.parse(response);
    console.log(user);
    return user;
  })
  .then(user => {
    console.log(`Second: ${user.name}`);
    let img = new Image();
    img.src = user.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        img.remove();
        console.log('img deleted');
        resolve();
      }, 3000);
    });
  })
  .catch(error => {
    console.log(error);
  });
