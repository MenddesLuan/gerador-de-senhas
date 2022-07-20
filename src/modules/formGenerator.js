import Generator from "./Generator"

export default class FormGenerator {
    constructor() {
        this.senhaGerada = document.querySelector('.senha-gerada')
        this.options = document.querySelector('.options')
        this.eventos()
    }

    eventos() {
        this.options.addEventListener('click', e => {
            this.handleClick(e);
        });
    }

    handleClick(e) {
        const el = e.target
        const tag = el.tagName.toLowerCase()
        if(tag === 'button'){
            this.senhaGerada.innerHTML = this.gneratePassword()
        }
    }

    gneratePassword(){
        const qtdChar = this.options.children.item(0).children.item(1)
        const isUpper = this.options.children.item(1).children.item(1)
        const isLower = this.options.children.item(2).children.item(1)
        const isNumber = this.options.children.item(3).children.item(1)
        const isSymbol = this.options.children.item(4).children.item(1)
        const senha = Generator.generatePass(
            qtdChar.value,
            isUpper.checked,
            isLower.checked,
            isNumber.checked,
            isSymbol.checked
        )
        if(isUpper.checked || isLower.checked || isNumber.checked || isSymbol.checked){
            if(qtdChar.value > 5 && qtdChar.value <= 40){
                this.senhaGerada.className = 'sucess'
                return senha            
            }else {
                this.senhaGerada.className = 'error'
                return 'Quantidade de caracteres não pode ser vazia </br> Deve ter no mínimo 6 caracteres </br> Máximo 40 caracteres'
            }
        }else {
            this.senhaGerada.className = 'error'
            return 'Você precisa escolher uma opção'
        }
    }
}

new FormGenerator()
