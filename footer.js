fetch('footer.html')
.then(res => res.text())
.then(text => {
    let footer = document.querySelector("#footer");
    footer.innerHTML = text;
})