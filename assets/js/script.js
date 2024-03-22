// const tab = document.querySelector(".tab-item");
// const content = document.querySelector(".contentbox");


// tab.forEach(e => { e.style.display = block })

// content.forEach(e => {
//     e.style.display = none;
//     e.style.display = block;
// })
// function navtabs(tabs) {
//     const tabshow = document.querySelectorAll(".tabshow");
//     const tabBtn = document.querySelectorAll(".tabs button");
//     tabshow.forEach(content => {
//         content.style.display = 'none'
//     });

//     const tabs = document.getElementById(tabs);
//     content.style.display = 'block'
// }

// navtabs('tab1')


let tabs = document.querySelectorAll(".tab-1");
let tabcontent = document.querySelectorAll(".tab-content .content");
console.log(tabs, tabcontent);

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabcontent.forEach((e) => {
            e.classList.remove("active");
            tabcontent[index].classList.add("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
            tabs[index].classList.add("active")
        });


    })
})




