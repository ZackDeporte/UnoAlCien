function generateNumber() {
    // Genera un número aleatorio entre 1 y 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Actualiza el texto en el elemento con id="result"
    document.getElementById("result").textContent = `Número: ${randomNumber}`;
}
