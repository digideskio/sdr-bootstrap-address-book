/**
 * Created by DMedzatiy on 15-Aug-16.
 */

export function readData(userName) {
        const URL = "https://api.github.com/users/" + userName;
    return (
        fetch(URL, {
                method: 'get',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'request'
                }
            }
        ).then(
            response => {
                console.log(response);
                if (response.status == 200) {
                    return response.json();
                } else {
                    if (response.status == 404) {
                        return {Error: "Wrong user name..."}
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                }
            },
            error => {
                return error
            }
        ));
}