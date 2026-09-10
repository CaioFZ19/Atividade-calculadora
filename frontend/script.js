const botaoCalcular = document.querySelector("#btncalcular")
const resultado = document.querySelector("#resultado")

botaoCalcular.addEventListener("click", async function() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const operacao = document.querySelector("#operacao").value

    const resposta = await fetch("http://localhost:3000/calcular", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ num1, num2, operacao})
    })

    const dados = await resposta.json()

    resultado.textContent = dados
})
