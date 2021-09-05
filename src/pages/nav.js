var nav = document.getElementsByClassName("nav-link");

console.log(nav);

console.log(nav[0]);

function handleClick(event) {
    
    console.log(event.target);
    // console.log(this);
    // 콘솔창을 보면 둘다 동일한 값이 나온다

    console.log(event.target.classList);

    if (event.target.classList[1] === "active") {
        event.target.classList.remove("active");
    } else {
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.remove("active");
        }

        event.target.classList.add("active");
    }
}

function init() {
    for (var i = 0; i < nav.length; i++) {
        nav[i].addEventListener("click", handleClick);
    }
}

init();
