const fileInput = document.querySelector('#file-store-input');

fileInput.addEventListener('input', () => {
    const formData = new FormData();
    formData.append('file_upload', fileInput.files[0]);
    console.log(fileInput.files[0])

    axios.post('https://storethatbit.hopto.org/api/file/update', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }});
});
