function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("image");
    const values = [];
    const images = [];
    for (let i = 1; i <= numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="..Acode/Dice/${value}.png" alt="Dice: ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(", ")} `;
    diceImages.innerHTML = images.join("");
}
