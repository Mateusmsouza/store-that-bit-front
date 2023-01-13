import axios from 'axios'

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let uuid = params.uuid;

console.log(params.uuid)

if (uuid == null){
    alert('file not found');
}

function download(url, filename) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    })
    .catch(console.error);
  }

axios.get(`https://storethatbit.hopto.org/api/file/${uuid}`, {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }}).then( response => {
        console.log(response);
        download(response.data.url, 'teste')
    })
    .catch( err => {
        console.log(err);
    });
