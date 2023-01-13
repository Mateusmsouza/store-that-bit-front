const fileModal = document.querySelector(".fullpage-modal-container");

fileModal.style.display = "none";

const closeButtonModal = document.querySelector(".close-btn");
closeButtonModal.addEventListener("click", () => {
    fileModal.style.display = "none";
});

export function showModal (fileuuid) {
    const file_informative = document.querySelector("#file_informative");
    
    file_informative.textContent = `https://store-that-bit-front.pages.dev/file/?uuid=${fileuuid}`;
    fileModal.style.display = "table";
};


let warningFile = document.querySelector(".store-that-bit__alert");
console.log(warningFile.style)
warningFile.style.display = 'none';

export function showWarning () {
    
    warningFile.style.display = "";

    setTimeout(function(){
        warningFile.style.display = "none";
    },5000)
};