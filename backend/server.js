const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.post("/calcular", (req, res) => {
    const {num1, num2, operacao} = req.body
    let resultado
    const conta = `${num1} ${operacao} ${num2} =`
    if (!num1 || !num2 || !operacao) {
        resultado = "Erro: operação ou números faltando, certifique se de preencher todos os inputs"
    } else if (operacao != "+" || operacao != "-" || operacao != "x" || operacao != "/") {
        resultado = "Erro: operação inválida"
    }

    switch(operacao) {
        case ("+"):
            resultado = `${conta} ${num1 + num2}`
            break

        case ("-"):
            resultado = `${conta} ${num1 - num2}`
            break

        case ("x"):
            resultado = `${conta} ${num1 * num2}`
            break

        case ("/"):
            if (num2 == 0) {
                resultado = "Erro: divisão por 0"
            } else {
                resultado = `${conta} ${num1 / num2}`
            }
            break  
    }

    res.json(resultado)
})

app.listen(3000, () => {
    console.log("Calculadora-Backend rodando em http://localhost:3000")
})
