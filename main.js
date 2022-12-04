/*Navbar size*/
var navbar= document.querySelector(".navbar");
window.onscroll= () =>{
	this.scrollY > 20 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
}

/* Navbar */

const navMenu= document.querySelector(".menu");
    navToggle=document.querySelector(".menu-btn");
    if(navToggle)
    {
      navToggle.addEventListener("click", () =>
      {
        navMenu.classList.toggle("active");

      })
    }


  /* Navbar closing menu*/

  const navLink=document.querySelectorAll(".nav-link");
  function linkAction() 
  {
    const navMenu=document.querySelector(".menu");
    navMenu.classList.remove("active")
  }
  navLink.forEach(n => n.addEventListener("click", linkAction))


  /*===== Skills Animation =====*/
      const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      
      function checkScroll(el)
      {
          
          let rect = el.getBoundingClientRect();
          
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }


/* Scroll animation */

const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)



// carousel//

const buttons= document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset= button.dataset.carouselButton === "next" ? 1: -1
    const slides= button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlide= slides.querySelector("[data-active]")
    let newIndex=[...slides.children].indexOf(activeSlide)+ offset
    if (newIndex < 0) newIndex= slides.children.length -1 
    if (newIndex >= slides.children.length) newIndex= 0

    slides.children[newIndex].dataset.active= true
    delete activeSlide.dataset.active
  })

})



// Footer section

function insertFooter() {
  // create header for name
  let ft = document.getElementById("footer");
  ft.classList.add("footer");

  let fol = document.createElement("div");
  fol.innerHTML = "Follow Me";
  fol.classList.add("follow");
  ft.appendChild(fol);

  // create social buttons
  let soc = document.createElement("div");
  let a = document.createElement("a");
  let fb = "<i class='fa-brands fa-linkedin fa-inverse fa-2xl'></i>";
  a.innerHTML = fb;
  a.classList.add("social");
  a.classList.add("fb");
  a.setAttribute("href", "https://linkedin.com/in/nurbanudauletova");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let insta = "<i class='fa-brands fa-instagram fa-inverse fa-2xl'></i>";
  a.innerHTML = insta;
  a.classList.add("social");
  a.classList.add("insta");
  a.setAttribute("href", "https://instagram.com/dlrvnn");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let git = "<i class='fa-brands fa-github-square fa-inverse fa-2xl'></i>";
  a.innerHTML = git;
  a.classList.add("social");
  a.classList.add("git");
  a.setAttribute("href", "https://github.com/dauletovan");
  soc.appendChild(a);
  ft.appendChild(soc);
}

insertFooter();
////////////////////////////////////////////////

