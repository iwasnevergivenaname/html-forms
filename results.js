const resultDiv = document.getElementById("results");
console.log(resultDiv);

new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name, value);

    let resultElement = document.createElement("p");
    resultElement.textContent = name + ": " + value;


    resultDiv.appendChild(resultElement);

})