var idade = 70
console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log('Você não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Você não é obrigado a votar!')
} else {
    console.log('Você é obrigado a votar!!!!')
}