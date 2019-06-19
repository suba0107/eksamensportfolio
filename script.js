window.addEventListener("load", sidenVises);
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-content");

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#image1").addEventListener("click", modalFunction);
    document.querySelector("#image2").addEventListener("click", modalFunction);
    document.querySelector("#image3").addEventListener("click", modalFunction);

    document.querySelector("#image4").addEventListener("click", modalFunction);

    document.querySelector("#image5").addEventListener("click", modalFunction);
    document.querySelector("#image6").addEventListener("click", modalFunction);
}


function modalFunction() {
    /*KODE OMSKREVET FRA https://www.w3schools.com/howto/howto_css_modal_images.asp */
    console.log("modalFunction");
    this.classList.remove("cover");
    this.classList.add("contain");
    this.lastElementChild.classList.remove("hide");

    this.removeEventListener("click", modalFunction);

    this.lastElementChild.firstElementChild.addEventListener("click", close);

}

function close() {
    console.log("close")
    this.parentElement.classList.add("hide");
    location.reload();
}
