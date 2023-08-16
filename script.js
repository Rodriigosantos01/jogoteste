let divCards = document.querySelector("#divCards")
let divEffect = document.querySelector("#divEffect")
let cards = []


const initial = async () => {
    await findQuestions();
    renderFirstQuestion()

}

const renderFirstQuestion = () => {
    renderQuestion(0)
}

const renderQuestion = (index) => {
    const question = cards[index]
    let html = `
    <div class="col-1">
    </div>
    <div class="card col-10">
        <div class="card-body">
            <p class="card-text">
                ${question.pergunta}
            </p>
            <a href="#"  onClick="showEffect(${index}, 0)">
                ${question.opcoes[0].texto}
            </a>
            <br>
            <br>
            <br>
            <a href="#"  onClick="showEffect(${index}, 1)">
                ${question.opcoes[1].texto}
            </a>
        </div>
    </div>
    `;

    divCards.innerHTML = html
    hideEffect()
}

const showEffect = (index, indexQuestion) => {
    const question = cards[index]
    const opcao = question.opcoes[indexQuestion]
    divEffect.innerHTML = `
        ${opcao.efeitoPositivo} 
        <button class="btn btn-primary" onClick="renderQuestion(${--opcao.proximaPergunta})">CONTINUAR</button>
    `
}

const hideEffect = () => {
    divEffect.innerHTML = ``
}

const findQuestions = async () => {
    let response = (await fetch("json.json"));
    let json = await response.json()

    cards = json
}

initial()
