const cursorShadow = document.querySelector(".cursor-shadow");

document.addEventListener("mousemove", (e) => {
    const x = e.pageX;
    const y = e.pageY;

    cursorShadow.style.left = `${x}px`;
    cursorShadow.style.top = `${y}px`;
});