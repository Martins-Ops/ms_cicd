const containerElement = document.querySelector(".container");
const loadingElement = document.createElement("div");
const textElement = document.createElement("div");

(async () => {
    try {
        loadingElement.innerText = "Loading...";
        containerElement.appendChild(loadingElement);
        const response = await fetch("http://localhost:8080");
        const data = await response.text();
        containerElement.removeChild(loadingElement);
        textElement.innerText = data;
        containerElement.appendChild(textElement);
    } catch (error) {
        if (error instanceof Error) {
            loadingElement.innerText = error.message;
            containerElement.appendChild(loadingElement);
        }
    }
})();
