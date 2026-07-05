// Product Popup Open
function openPopup(title, text, image) {

    document.getElementById("popup").style.display = "block";

    document.getElementById("popup-title").innerHTML = title;

    document.getElementById("popup-text").innerHTML = text;

    document.getElementById("popup-img").src = image;

    // Default Packs
    let packs = `
        <li>500 ml</li>
        <li>1 Litre</li>
        <li>5 Litre</li>
        <li>15 Kg Tin</li>
    `;

    // Only Ghee
    if(title === "Pure Desi ghee"){
        packs = `
            <li>1 Kg</li>
        `;
    }

    document.getElementById("popup-packs").innerHTML = packs;

    document.getElementById("popup-whatsapp").href =
    "https://wa.me/918976425993?text=Hello, I want to order " + title;
}

// Close Popup
function closePopup(){

    document.getElementById("popup").style.display = "none";

}

// Close when clicking outside popup
window.onclick = function(event){

    if(event.target == document.getElementById("popup")){

        closePopup();

    }

}