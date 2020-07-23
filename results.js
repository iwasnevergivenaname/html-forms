const resultDiv = document.getElementById("results");
console.log(resultDiv);

new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name, value);
})