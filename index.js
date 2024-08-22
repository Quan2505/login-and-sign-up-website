const container=document.querySelector('.container');
const Loginlink=document.querySelector('.SignInLink')
const Registerlink=document.querySelector('.SignUpLink')
Registerlink.addEventListener('click',()=>{
    container.classList.add('active');
})
Loginlink.addEventListener('click',()=>{
    container.classList.remove('active');
})