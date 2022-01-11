// app.js

// selector 
const filterBtns = document.querySelectorAll(".filter-btn-groups li"),
    boxs = document.querySelectorAll(".single-content");


// work with filter btn 
filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        let btnName = btn.getAttribute("id");
        btn.classList.add("active");
        filterBtns.forEach(btnItem => {
            if (btn !== btnItem) {
                btnItem.classList.remove("active");
            }
        })
        boxs.forEach(box => {
            box.style.display = "none";
            let name = box.getAttribute("data-name");
            box.classList.remove("active-now");
            if (name === btnName) {
                box.classList.add("active-now");
                box.style.display = "block";
            } else if (btnName === "All") {
                box.classList.remove("active-now");
                box.style.display = "block";
            }
        })

    })
})