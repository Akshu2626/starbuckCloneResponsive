let menu = document.querySelector('#menuicon');
let nav=document.querySelector('.nav');
let hi=document.querySelector('.menuuu');
let navbar=document.querySelector('.navbar')

// <i class="ri-close-line"></i> ;
// <i class="ri-menu-2-fill"></i>;
let flag=0;
hi.addEventListener('click',()=>{
    if (flag==0) {
        hi.innerHTML='<i class="ri-close-line"></i>'
        navbar.style.top='100%'
        flag=1;
    }else{
        hi.innerHTML='<i class="ri-menu-2-fill"></i>'
        navbar.style.top='-500px'
        flag=0
    }


})
