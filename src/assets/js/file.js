import { showAlert, alertTypes } from "./showalert";

export function showWarningFileNotFound(){
    showAlert(alertTypes.Warning, "File not found", "alert-get-file");
};

export function showAlertSuccess(){
    const spinner = document.getElementById("file-spinner");
    const paragraph = document.getElementById("file-paragraph");
    showAlert(alertTypes.Success, "File Downloaded!", "alert-get-file", false);

    spinner.classList.add("hidden");
    paragraph.style.visibility = "hidden";
}