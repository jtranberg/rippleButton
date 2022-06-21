const rippleButton = document.querySelector(".ripple-button");

function mousePositionToCustomProp(event, element)
{
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--Y", posY + "px");
}

rippleButton.addEventListener("click", (e) => {
    mousePositionToCustomProp(e, rippleButton);
    rippleButton.classList.add("pulse");
    rippleButton.addEventListener("animationend", () => {
        rippleButton.classList.remove("pulse");    
    });
});