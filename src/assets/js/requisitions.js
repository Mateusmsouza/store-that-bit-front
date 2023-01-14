import axios from 'axios'
import { showModal, showWarning } from './showmodal.js'

const fileInput = document.getElementById('file');
const fileLabel = document.getElementById('file-label')
const fileButton = document.getElementById('file-store-button');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length == 0){
        return;
    }
    const [{ name: fileName }] = fileInput.files;
    fileLabel.setAttribute('data-label', fileName);
    fileLabel.setAttribute('title', fileName);
})

fileButton.addEventListener('click', () => {
    if (fileInput.files.length == 0){
        showWarning();
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
