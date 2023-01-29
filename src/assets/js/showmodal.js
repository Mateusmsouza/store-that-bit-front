const fileModal = document.querySelector(".fullpage-modal-container");

fileModal.style.display = "none";

const closeButtonModal = document.querySelector(".close-btn");
closeButtonModal.addEventListener("click", () => {
    fileModal.style.display = "none";
});

export function showModal (fileuuid) {
    const file_informative = document.querySelector("#file_informative");
    
    file_informative.textContent = `https://storethatbit.app/file/?uuid=${fileuuid}`;
    fileModal.style.display = "table";
};


let warningFile = document.querySelector(".store-that-bit__alert");
warningFile.style.visibility = 'hidden';

export function showWarning (messageUpdate) {
    
    warningFile.style.visibility = "visible";
    const oldText = warningFile.textContent;

    if (messageUpdate != null){
        warningFile.textContent = messageUpdate;
    }
    setTimeout(function(){
        warningFile.style.visibility = "hidden";
        warningFile.textContent = oldText;
    },3000)
};