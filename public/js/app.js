
const lastScrollTop = 0;
nabvar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.opacity="1"; 
  
  }else{

  navbar.style.opacity= "0";
  
  }
  lastScrollTop = scrollTop;
})

