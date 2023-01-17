export const alertTypes = {
	Warning: "Warning",
	Error: "Error",
	Success: "Success"
}

function getAlertClass(alertType){
    if(alertTypes.Success == alertType){
        return 'okay';
    }

    return okay
}

export function showAlert(alertType, alertContent, alertId, removeAfterShow){
    let alert = document.getElementById(alertId);
    let icon = alert.firstElementChild.firstElementChild;
    let title = alert.lastElementChild.firstElementChild;
    let text = alert.lastElementChild.lastElementChild;

    let alertClass = getAlertClass(alertType);
    icon.classList.add(`petalicon-${alertClass}`);
    alert.classList.add(alertClass);
    title.textContent = alertType;
    text.textContent = alertContent;

    alert.style.visibility = "visible";

    if(removeAfterShow == null || removeAfterShow == true){
        setTimeout(function(){
            alert.style.visibility = "hidden";
        },3000);
    }
};