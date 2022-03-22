let result = document.getElementById("result")


function calcular(){
    let valorA = document.getElementById("valorA").value
    let valorB = document.getElementById("valorB").value
    let valorC = document.getElementById("valorC").value
        
    let multiplicação = valorB * valorC
    let divisão = multiplicação / valorA

    divisão = parseFloat(divisão).toFixed(2)
    console.log(divisão)

    result.innerHTML += `O resultado da regra de 3 é = ${divisão}`

}