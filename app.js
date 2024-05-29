const formOpenBtn= document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formClose=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login");


// Afficher le formulaire et le cacher.
formOpenBtn.addEventListener("click", ()=>{
    home.classList.add("show")
})
 formClose.addEventListener("click", ()=>{
    home.classList.remove("show")
 })

 signupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
 });

 loginBtn.addEventListener("click",(e)=>{
    formContainer.classList.remove("active")
 })
