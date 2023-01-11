const fileModal = document.querySelector(".fullpage-modal-container");

fileModal.style.display = "none";

function showModal(fileuuid){
    const file_informative = document.querySelector("#file_informative");
    
    file_informative.textContent = `https://storethatbit.netlify.app/${fileuuid}`;
    fileModal.style.display = "table";

};

const closeButtonModal = document.querySelector(".close-btn");
closeButtonModal.addEventListener("click", () => {
    fileModal.style.display = "none";
});