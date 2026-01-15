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
 