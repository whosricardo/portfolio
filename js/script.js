const themeToggleButton = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeToggleButton.addEventListener("click", () => {
        // Verifica se a classe 'white' está ativa
        if (htmlElement.classList.contains("white")) {
            // Remove a classe 'white' para voltar ao tema escuro
            htmlElement.classList.remove("white");
            themeToggleButton.textContent = "Switch to Light Mode";
        } else {
            // Adiciona a classe 'white' para o tema claro
            htmlElement.classList.add("white");
            themeToggleButton.textContent = "Switch to Dark Mode";
        }
});