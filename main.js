window.onload = function () {
    let tabs = document.getElementsByClassName("list-group-item");
    let tabBody = document.getElementById("tab-body");
    let mountainOneView = document.getElementById("mountain-one");
    let mountainTwoView = document.getElementById("mountain-two");
    let mountainOneContent = document.getElementById("mountain-one-content");
    let mountainTwoContent = document.getElementById("mountain-two-content");

    tabs[0].addEventListener("click", function () {
        // when user clicks tab 1, change to tab-selected class
        tabs[0].classList.remove("tab-deselected");
        tabs[0].classList.add("tab-selected");

        tabs[1].classList.add("tab-deselected");
        tabs[1].classList.remove("tab-selected");

        mountainOneView.classList.remove("d-none");
        mountainOneContent.classList.remove("d-none");
        mountainTwoContent.classList.add("d-none");

        tabBody.classList.add("mountain-one");
        tabBody.classList.remove("mountain-two");
    });

    tabs[1].addEventListener("click", function () {
        // when user clicks tab 2, change to tab-selected class
        tabs[1].classList.remove("tab-deselected");
        tabs[1].classList.add("tab-selected");

        tabs[0].classList.add("tab-deselected");
        tabs[0].classList.remove("tab-selected");

        mountainTwoView.classList.remove("d-none");
        mountainTwoContent.classList.remove("d-none");
        mountainOneContent.classList.add("d-none");

        tabBody.classList.add("mountain-two");
        tabBody.classList.remove("mountain-one");
    });
}