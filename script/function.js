const property_page = document.querySelector(".property");
const electrical_page = document.querySelector(".electrical-work");
const mechanical_page = document.querySelector(".mechanical-work");
const civil_page = document.querySelector(".civil-work");



property_page.addEventListener("click", ()=>{
    window.location.href=('property.html');
}
)
electrical_page.addEventListener("click", ()=>{
    window.location.href=('electrical.html');
}
)
mechanical_page.addEventListener("click", ()=>{
    window.location.href=('mechanical.html');
}
)
civil_page.addEventListener("click", ()=>{
    window.location.href=('civil.html');
}
)