const fileInput = document.querySelector('#file');

const fileButton = document.querySelector('#file-store-button');

fileButton.addEventListener('click', () => {
    console.log(fileInput);
    if (fileInput.files == null){
        alert('select a file');
        return;
    }

    console.log(fileInput.files);
    const formData = new FormData();
    formData.append('file_upload', fileInput.files[0]);
    console.log(fileInput.files[0])

    axios.post('https://storethatbit.hopto.org/api/file/update', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }}).then( response => {
        showModal(response.data.uui);
    })
    .catch( err => {

    })
});
