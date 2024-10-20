
/* 存储区  */
let  functionSave = {
    function1: "https://s21.ax1x.com/2024/09/21/pAM3bFO.png",  /* res/web.png   */
    function2: "https://s21.ax1x.com/2024/10/20/pAa3JnP.png",    /*  res/python.png*/
    function3: "https://s21.ax1x.com/2024/10/20/pAa3MfH.png",     /* res/null.png  */
    function4: "https://s21.ax1x.com/2024/10/20/pAa3MfH.png",
    function5: "https://s21.ax1x.com/2024/10/20/pAa3MfH.png"
}

let imgSave = {
    img1: "https://s21.ax1x.com/2024/09/21/pAMavZj.png",   /* res/banner/epic.png   */
    img2: "#",
    img3: "#",
    img4: "#",
    img5: "#",
    img6: "#",
    img7: "#",
    img8: "#",
    img9: "#",
    img10: "#",
    img11: "#",
    img12: "#",
    img13: "#"
}


// logo click
document.querySelector(".logo").addEventListener("click", function () {
    window.open("#", "_self");
})

for (let i = 1; i < 6; i++) {
    let pp = `.main-${i}`;
    let pp2 = `function${i}`;
    let  pp3 = functionSave[pp2];
    document.querySelector(pp).style.backgroundImage=`url(${pp3})`;
}

let ddd= document.querySelectorAll(".get div");
let  dddNumber = ddd.length;
for (let i = 1; i < dddNumber; i++) {
    let imgN = `img${i}`;
    let imgN2 = imgSave[imgN];
    let imgN3 = `testImg${i}`;
    console.log(imgN3);
    console.log(imgN2);
    console.log(imgN);
    document.querySelector(`.${imgN3}`).style.backgroundImage=`url(${imgN2})`;
}

