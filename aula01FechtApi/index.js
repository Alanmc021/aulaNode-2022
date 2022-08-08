import fetch from "node-fetch";
fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return (response.json());
    }).then((response) => {
        console.log(response);
    })


