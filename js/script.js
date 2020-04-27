"use strict"
AOS.init();




let data_toggle = document.querySelector('[data-toggle-menu]');
function btnToggle(value){
   data_toggle.classList.toggle('show');
   document.onclick = toggleDoc;
   function toggleDoc(e){
       if(!value.contains(e.target) && !data_toggle.contains(e.target)){
        data_toggle.classList.remove('show')
    }
   }
}
window.onscroll = ()=> {
    let nikhilroy = document.querySelector('.nikhilroy');
    nikhilroy.style.top = `calc(50% + ${pageYOffset}px)`
}