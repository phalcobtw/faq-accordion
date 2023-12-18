const accordionButtons = document.querySelectorAll(".button");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    //Obtenemos el desc con nextelementsibling del boton (el elemento siguiente)
    const accordionDesc = this.nextElementSibling;
    //Mandamos a llamar plus y minus con "this" para obtener solo el del boton clickeado
    const plusIcon = this.querySelector(".plus");
    const minusIcon = this.querySelector(".minus");
    //If oculta desc si existe un maxheight, sino le asigna uno para mostrarlo
    if (accordionDesc.style.maxHeight) {
      accordionDesc.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      //Coloca maxheight igual a su scrollheight (height real estando visible)
      accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
