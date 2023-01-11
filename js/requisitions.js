const fileInput = document.querySelector('#file-store-input');

const fileButton = document.querySelector('#file-store-button');

fileButton.addEventListener('click', () => {
    if (fileInput.files.length == 0){
        alert('select a file');
        return;
    }
    const formData = new FormData();
    formData.append('file_upload', fileInput.files[0]);
    console.log(fileInput.files[0])

    axios.post('https://storethatbit.hopto.org/api/file/update', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }}).then( response => {

    })
    .catch( err => {
        
    })
});
