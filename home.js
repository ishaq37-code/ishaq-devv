const reumeBtn = document.querySelectorAll(".btn")

reumeBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume-item");

        reumeBtn.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active")
        resumeDetails.forEach(deatils => {
            deatils.classList.remove("active");
        });
        resumeDetails[idx].classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {


  const num = document.querySelector('.project-num');
  const tittle = document.querySelector('.project-tittle');
  const des = document.querySelector('.project-des');
  const tech = document.querySelector('.project-tech');
  const img = document.querySelector('.project-image-cont .image-slider .image-slide img');
  const link = document.querySelector(".live-link");
  const github = document.querySelector(".github");
  const nextbtn = document.querySelector('.right-arrow');
  const preBtn = document.querySelector('.left-arrow');

 
  const projects = [
    {
      num:"01",
      tittle:"Frontend Project",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore asperiores perspiciatis similique placeat consectetur sapiente fugiat blanditiis dolores totam.",
      img:"portfolio1.jpg",
      tech:"HTML, CSS, JS",
      link:"#",
      github:"#"
    },
    {
      num:"02",
      tittle:"Woocommerce Project",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore asperiores perspiciatis similique placeat consectetur sapiente fugiat blanditiis dolores totam.",
      img:"portfolio2.jpg",
      tech:"Woocommerce, Elementor, Ajax",
      link:"#",
      github:"#"
    },
    {
      num:"03",
      tittle:"Shopify Project",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore asperiores perspiciatis similique placeat consectetur sapiente fugiat blanditiis dolores totam.",
      img:"portfolio3.jpg",
      tech:"Shopify, Elementor, Ajax",
      link:"#",
      github:"#"
    }
  ];

  let currentIndex = 0;

function loadData(index){
  const project = projects[index];


  num.classList.add('fade-out');
  tittle.classList.add('fade-out');
  des.classList.add('fade-out');
  tech.classList.add('fade-out');
  img.classList.add('fade-out');

  setTimeout(() => {
    num.textContent = project.num;
    tittle.textContent = project.tittle;
    des.textContent = project.des;
    tech.textContent = project.tech;
    img.src = project.img;
    link.href = project.link;
    github.href = project.github;

   
    num.classList.remove('fade-out');
    tittle.classList.remove('fade-out');
    des.classList.remove('fade-out');
    tech.classList.remove('fade-out');
    img.classList.remove('fade-out');

    
    preBtn.disabled = index === 0;
    nextbtn.disabled = index === projects.length - 1;
  }, 300); 
}


 
  loadData(currentIndex);

  
  nextbtn.addEventListener('click', () => {
    if(currentIndex < projects.length - 1){
      currentIndex++;
      loadData(currentIndex);
    }
  });

  preBtn.addEventListener('click', () => {
    if(currentIndex > 0){
      currentIndex--;
      loadData(currentIndex);
    }
  });

});

const form= document.getElementById("ContactForm");
const status= document.getElementById("status")

form.addEventListener("submit",(e)=>{
   e.preventDefault();

   fetch("https://script.google.com/macros/s/AKfycbzixQ56OrqTMuibJHdRNTt9nH0VFVSRX2TQc9L96aAOTY2oBox1uajB-64RKSq3R2NFHQ/exec",{
    method:"POST",
    body: new FormData(form)
   })
    .then(res => res.text())
    .then(data => {
      status.innerText = "✅ Form submitted successfully!";
      form.reset();
    })
     .catch(err => {
      status.innerText = "❌ Submission failed. Try again!";
      console.error(err);
    });
  });
  
const timeLine= gsap.timeline()


timeLine.from(".home-content h1",{
  y:50,
  duration:1,
  opacity:0,
  delay:1
})

.from(".home-content h3", {
  opacity:0,
  duration:1,
  y:50,
 
  
})
.from(".home-content p", {
  opacity:0,
  duration:1,
  
 
  
})
.from(".home-content .sci", {
  opacity:0,
  duration:1,
  y:60
 
  
})
.from(".home-content .sci .icon ", {
  opacity:0,
  duration:1,
  y:60,
 stagger:1
  
})


.from(".home-image", {
  opacity:0,
  duration:1,
  scale:0.8
 
  
})

gsap.from(".services h2",{
   opacity:0,
   duration:1,
   y:50,
  scrollTrigger:{
     trigger:".services h2",
     body:"body",
     
     start:"top 50%",
     end:"top 80%"
  }
})
gsap.from(".services-container",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".services-container",
     start:"top 70%",
     once:true,
     
     
  }
})
gsap.from(".resume-cont-left h2",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".resume-cont-left",
     start:"top 70%",
     once:true,
    
     
  }
})
gsap.from(".resume-cont-left p",{
   opacity:0,
   duration:2,
   y:10,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".resume-cont-left p",
     start:"top 70%",
     once:true,
     
     
  }
})
gsap.from(".resume-cont-left .button-sec button",{
   opacity:0,
   duration:2,
   x:-60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".resume-cont-left .button-sec",
     start:"top 70%",
     once:true,
     
     
  }
})
gsap.from(".resume-cont-right",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".resume-cont-right",
     start:"top 70%",
     once:true,
     
     
  }
})
gsap.from(".project h1",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".project ",
     start:"top 70%",
     once:true,
    
     
  }
})
gsap.from(".project .project-con ",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".project .project-con",
     start:"top 70%",
     once:true,
 
     
  }
})
gsap.from(".contact-info h2",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".contact-info ",
     start:"top 70%",
     once:true,
    
     
  }
})
gsap.from(".contact-info .contact-detils",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".contact-info .contact-detils",
     start:"top 70%",
     once:true,
    
     
  }
})
gsap.from(".contact-form h2",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".contact-info ",
     start:"top 70%",
     once:true,
    
     
  }
})
gsap.from(".contact-form form",{
   opacity:0,
   duration:2,
   y:60,
   stagger:0.6,
   ease:"power2.out",
  scrollTrigger:{
     trigger:".contact-info ",
     start:"top 70%",
     once:true,
    
     
  }
})