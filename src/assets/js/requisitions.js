import axios from 'axios'
import { showModal } from './showmodal.js'

const fileInput = document.querySelector('#file');

const fileButton = document.querySelector('#file-store-button');

fileButton.addEventListener('click', () => {
    if (fileInput.files.length == 0){
        alert('select a file');
        return;
    }

    console.log(fileInput.files);
    const formData = new FormData();
    formData.append('file_upload', fileInput.files[0]);

    axios.post('https://storethatbit.hopto.org/api/file/update', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }}).then( response => {
        showModal(response.data.uuid);
    })
    .catch( err => {

    })
});
