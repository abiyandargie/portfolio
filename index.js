const seeProjectButton = document.querySelector('.box1 .see-project button');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
const projectDetails = document.createElement('div');
projectDetails.classList.add('project-details');
projectDetails.innerHTML = `
  <span class="close-button">&times;</span>
  <h2>Tonic</h2>
  <ul class = 'jsLists'>
    <li>CANOPY</li>
    <li>Back end dev</li>
    <li>2015</li>
  </ul>
  <img src="images/box1.png" alt="box 1 image" width="100px">
   <span>
  <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  <ul class = 'jsLists'>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>  
  </span>
`;
modalContent.appendChild(projectDetails);
modal.appendChild(modalContent);
document.body.appendChild(modal);
seeProjectButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
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
      
      const form = document.getElementById('contactForm');
      const emailInput = document.getElementById('email');
      const errorContainer = document.querySelector('.error-container');
  
      form.addEventListener('submit', (event) => {
        event.preventDefault(); 
  
        const email = emailInput.value.trim();
  
        if (email.toLowerCase() === email) {
           
          form.submit();
        } else {
          
          errorContainer.textContent = 'email must be lowercase';
        }
        emailInput.addEventListener('input', () => {
           
          errorContainer.textContent = '';
        });
      });