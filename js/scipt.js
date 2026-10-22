document.querySelector(".project-projects").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/my_projects.html";
});

document.querySelector(".project-me").addEventListener("click", () => {
    window.location.href = "for_me.html";
});

document.querySelector(".project-team").addEventListener("click", () => {
    window.location.href = "for_my_team.html";
});

document.querySelector(".project-help").addEventListener("click", () => {
    window.open("https://send.monobank.ua/jar/8NPooRFqk7", "_blank", "noreferrer");
});