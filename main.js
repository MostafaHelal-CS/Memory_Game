// Emojis Letters
let shapes=["❤️", "❤️", "🫶", "🫶", "✅", "✅", "🔥", "🔥", "😊", "😊", "😍", "😍", "✨", "✨", "⭐", "⭐", "🥰", "🥰", "💕", "💕", "🤍", "🤍", "🖤", "🖤", "🫡", "🫡", "💀", "💀", "☠️", "☠️"];

// Get Random Array Index
let randomvalueIndex=Math.floor(Math.random()*shapes.length);
console.log(randomvalueIndex);

// Get Random Array Value
let randomvalue=shapes[randomvalueIndex];
console.log(randomvalue);

// let RandomShaps=shapes.sort(() => (Math.random()>0.5)? 2:-1);
// OR 
let RandomShaps=shapes.sort(function () {
    return Math.random()>0.5? 2:-1;
});

console.log(RandomShaps);
// Select Game Element From html page
let theGame=document.querySelector(".game");

// loop on the array
RandomShaps.forEach((ele) => {
    // create button to carry the value
    let box=document.createElement('button');

    // Add class name the The Button
    box.className="box-letter";

    // Add Vlaue To Each Box
    box.innerHTML=ele;

    box.onclick=function () {
        this.classList.add("openBox");

        // SetTime Function To Determine Time
        setTimeout(() => {
            // Check The Length of boxes that have openBox
            if(document.querySelectorAll(".openBox").length>1) {
                // If The Content Value Of First And Second Box Are Equal Then Two Boxes Are Match
                if(document.querySelectorAll(".openBox")[0].innerHTML==document.querySelectorAll(".openBox")[1].innerHTML) {
                    // Give Two boxes MatchBox ClassName
                    document.querySelectorAll(".openBox")[0].classList.add("matchBox");
                    document.querySelectorAll(".openBox")[1].classList.add("matchBox");

                    // Remove openBox Class
                    document.querySelectorAll(".openBox")[1].classList.remove("openBox");
                    document.querySelectorAll(".openBox")[0].classList.remove("openBox");


                    if(document.querySelectorAll(".matchBox").length==shapes.length) {
                        // Congratz Function
                        congraulation();
                    }
                } else {
                    // Remove OpenBox Class
                    document.querySelectorAll(".openBox")[1].classList.remove("openBox");
                    document.querySelectorAll(".openBox")[0].classList.remove("openBox");
                }
            }
        }, 700);
    };
    // Append Box To THe Game Element
    theGame.appendChild(box);
});

// select Reset Element
let resetEle=document.querySelector(".reset");
// Reset Function
resetEle.onclick=function () {
    window.location.reload();
};

function congraulation () {
    // Create PopUp For Congraulation
    let congratz=document.createElement("div");

    congratz.innerText="Congratulations, you successfully solved the puzzle ";

    // Select congrats element
    let cong=document.querySelector(".gongrats");
    cong.appendChild(congratz);
    cong.style.display="block";
} 