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
    const limitFileSizeInBytes = 20000000;
    if (fileInput.files.length == 0){
        showWarning();
        return;
    }

    var file = fileInput.files[0];

    if (file.size > limitFileSizeInBytes){
        showWarning('Your file is too heavy :( it must be less than  20MB.');
        return;
    } 

    const formData = new FormData();
    formData.append('file_upload', file);

    axios.post('https://storethatbit.hopto.org/api/file/update', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }}).then( response => {
        showModal(response.data.uuid);
    })
    .catch( err => {
        console.log(err);
    })
});
