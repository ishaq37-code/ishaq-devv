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
  const img = document.querySelector('.project-image-cont img');
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
  })