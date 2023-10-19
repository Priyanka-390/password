let a = document.getElementById("password");
function shown() {
    if (a.value === '') {
        document.querySelector(".hide").style.display = "unset";
        document.querySelector(".show").style.display = "none";
    }
    else if (a.type === "password") {
        a.type = "text";
        document.querySelector(".hide").style.display = "none";
        document.querySelector(".show").style.display = "unset";
    } else {
        a.type = "password";
        document.querySelector(".hide").style.display = "unset";
        document.querySelector(".show").style.display = "none";
    }
}