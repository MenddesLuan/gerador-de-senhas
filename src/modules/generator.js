class Generator {
    generatePass(qtd, upper, lower, num, symb){   
        const symbs = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
        const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const upperCase = () => String.fromCharCode(rand(65, 91))
        const lowerCase = () => String.fromCharCode(rand(97, 123))
        const genNumber = () => String.fromCharCode(rand(48, 58))
        const genSymb = () => symbs[rand(0, symbs.length)]

        const passArray = []
        qtd = Number(qtd)
        for (let i = 0; i <= qtd; i++){
           upper && passArray.push(upperCase())
           lower && passArray.push(lowerCase())
           num && passArray.push(genNumber())
           symb && passArray.push(genSymb())
        }
        return passArray.join('').slice(0, qtd)
    }
}

export default new Generator()