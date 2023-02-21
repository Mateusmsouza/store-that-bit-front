const fileModal = document.querySelector(".fullpage-modal-container");

fileModal.style.display = "none";

const closeButtonModal = document.querySelector(".close-btn");
closeButtonModal.addEventListener("click", () => {
    fileModal.style.display = "none";
});

export function showModal (fileuuid) {
    const file_informative = document.querySelector("#file_informative");
    let link = `https://storethatbit.app/file/?uuid=${fileuuid}`;
    file_informative.textContent = link;
    file_informative.a = link;
    file_informative.href = link; 
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
