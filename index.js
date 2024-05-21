function displayMethod() {
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.style.display = 'flex';
    const close = document.querySelector('.close');
    close.style.display = 'flex';
    const humberger = document.querySelector('.hamburger');
    humberger.style.display ='none';

  }

  function closeMethod() {
    const option = document.querySelector('.mainMenu');
    option.style.display = 'none';
    const close = document.querySelector('.close');
    close.style.display = 'none';
    const humberger =document.querySelector('.hamburger');
    humberger.style.display = 'flex';
  }
 function closeList() {
    
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.style.display = 'none';
    const close = document.querySelector('.close');
    close.style.display = 'none';
    const humberger =document.querySelector('.hamburger');
    humberger.style.display ='flex';
}
 
 function calledForList(){
    if (window.innerWidth <= 767) {
        closeList();
    }
    else {
        notCloseList();
    }
 }
 function notCloseList() {
    const humberger = document.querySelector('.hamburger');
    humberger.style.display = 'none';
    
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.style.display = 'flex';
  }
  displayMethod();
  closeMethod();
  closeList();
  notCloseList();
  calledForList();