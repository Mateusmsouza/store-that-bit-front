const fileModal = document.querySelector(".fullpage-modal-container");

fileModal.style.display = "none";

function showModal(filename){
    const file_informative = document.querySelector("#file_informative");
    
    file_informative.textContent = `this is a test ${filename}`;
    fileModal.style.display = "table";

};