// Função principal chamada pelo clique do botão no HTML
function calcularCarbono() {
    
    // 1. CAPTURA DOS ELEMENTOS: Cria variáveis para puxar as tags do HTML para o JavaScript
    var campoHectares = document.getElementById('hectares');
    var caixaResultado = document.getElementById('resultado-calc');
    
    // Converte o texto digitado pelo usuário em um número real (com casas decimais se houver)
    var hectares = parseFloat(campoHectares.value);

    // 2. VALIDAÇÃO DE ERRO: Verifica se o campo está vazio, se não é um número (isNaN) ou se é menor/igual a zero
    if (isNaN(hectares) || hectares <= 0) {
        
        caixaResultado.style.display = 'block';         // Força a caixinha de resultado a aparecer
        caixaResultado.style.backgroundColor = '#ffebee';// Muda o fundo para vermelho claro (erro)
        caixaResultado.style.borderLeftColor = '#d32f2f';// Muda a barra lateral para vermelho escuro
        
        // Injeta uma mensagem de erro dentro da caixinha
        caixaResultado.innerHTML = '<h4 style="color: #d32f2f; margin:0;"> Erro</h4><p style="margin: 5px 0 0 0;">Por favor, digite um número válido de hectares maior que zero.</p>';
        
        return; // Interrompe a função aqui mesmo para não fazer o cálculo errado
    }

    // 3. O CÁLCULO MATEMÁTICO
    var totalCarbono = hectares * 3.6;
    
    // 4. EXIBIÇÃO DO SUCESSO: Como o número deu certo, aplica o design verde de sucesso
    caixaResultado.style.display = 'block';          // Faz a caixa aparecer na tela
    caixaResultado.style.backgroundColor = '#e8f5e9'; // Garante o fundo verde claro

    // Injeta o resultado final com HTML customizado dentro da div
    // .toFixed(1): Limita o resultado do carbono para exibir apenas 1 casa decimal (Ex: 18.0 em vez de 18.00000)
    // Math.round(): Arredonda a conta das árvores para um número inteiro sem quebras.
    caixaResultado.innerHTML = `
        <h4 style="color: #1b5e20; margin-top: 0;"> Resultado Estimado!</h4>
        <p>Adotando a agricultura regenerativa em <strong>${hectares} hectares</strong>, sua propriedade pode sequestrar cerca de <strong>${totalCarbono.toFixed(1)} toneladas</strong> de CO₂ da atmosfera por ano!</p>
        <p style="font-size: 13px; color: #555; margin-bottom: 0;">*Isso equivale ao impacto ambiental positivo de plantar aproximadamente ${Math.round(hectares * 25)} novas árvores!</p>
    `;
}



// QUIZZ
// 1. BANCO DE DADOS DO QUIZ: Lista de objetos contendo as perguntas, alternativas e a resposta certa
const perguntasQuiz = [
    {
        pergunta: "Qual é o principal objetivo da Agricultura Regenerativa?",
        opcoes: [
            "Aumentar o uso de fertilizantes químicos para acelerar as colheitas.",
            "Recuperar a saúde do solo, aumentar a biodiversidade e reter carbono.",
            "Substituir totalmente o plantio no solo por plantações hidropônicas.",
            "Expandir as fronteiras agrícolas desmatando novas florestas."
        ],
        correta: 1 // Indica que a alternativa correta é a segunda (lembrando que começa em 0)
    },
    {
        pergunta: "O que caracteriza a prática do 'Plantio Direto'?",
        opcoes: [
            "Plantar as sementes sem revirar o solo, mantendo a palhada anterior.",
            "Plantar em linhas perfeitamente retas usando satélites e GPS.",
            "Injetar água diretamente nas raízes através de canos profundos.",
            "Remover toda a matéria orgânica da superfície antes de semear."
        ],
        correta: 0
    },
    {
        pergunta: "Por que deixar o solo coberto com plantas vivas ou palha é importante?",
        opcoes: [
            "Apenas para deixar a paisagem da fazenda mais bonita.",
            "Para impedir que os raios de sol alcancem as folhas das culturas.",
            "Protege a terra contra erosão e alimenta os microrganismos do solo.",
            "Ajuda a secar o solo mais rapidamente após grandes tempestades."
        ],
        correta: 2
    },
    {
        pergunta: "Qual o benefício ambiental do sequestro de carbono promovido pelo solo vivo?",
        opcoes: [
            "Combater o aquecimento global, retirando gases poluentes da atmosfera.",
            "Tornar as plantas imunes a qualquer tipo de lagarta ou inseto.",
            "Diminuir a quantidade de oxigênio disponível no ar ao redor.",
            "Evitar que novas chuvas ocorram na região da propriedade rural."
        ],
        correta: 0
    }
];

// Variáveis de controle do estado do jogo
let indicePerguntaAtual = 0;
let pontuacaoFinal = 0;

// Função que inicia o quiz escondendo a tela inicial
function iniciarQuiz() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('area-quiz').style.display = 'block';
    indicePerguntaAtual = 0;
    pontuacaoFinal = 0;
    mostrarPergunta();
}

// Função responsável por desenhar a pergunta atual na tela
function mostrarPergunta() {
    const dadosPergunta = perguntasQuiz[indicePerguntaAtual];
    
    // Atualiza o texto do progresso
    document.getElementById('progresso-quiz').innerText = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasQuiz.length}`;
    
    // Atualiza o enunciado da pergunta
    document.getElementById('pergunta-texto').innerText = dadosPergunta.pergunta;
    
    // Limpa as alternativas anteriores e gera as novas em formato de botão
    const containerOpcoes = document.getElementById('opcoes-resposta');
    containerOpcoes.innerHTML = '';
    
    dadosPergunta.opcoes.forEach((opcao, idOpcao) => {
        const botao = document.createElement('button');
        botao.className = 'btn-opcao';
        botao.innerText = opcoesLetras(idOpcao) + ") " + opcao;
        // Ao clicar na alternativa, chama a função para checar a resposta
        botao.onclick = () => verificarResposta(idOpcao);
        containerOpcoes.appendChild(botao);
    });
}

// Função auxiliar para colocar letras (A, B, C, D) nas alternativas
function opcoesLetras(index) {
    const letras = ['A', 'B', 'C', 'D'];
    return letras[index];
}

// Função que checa se o usuário acertou e passa para a próxima pergunta
function verificarResposta(opcaoSelecionada) {
    const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;
    
    // Se acertou, soma 1 ponto
    if (opcaoSelecionada === respostaCorreta) {
        pontuacaoFinal++;
    }
    
    // Avança para a próxima pergunta ou encerra o jogo
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntasQuiz.length) {
        mostrarPergunta();
    } else {
        mostrarResultados();
    }
}

// Função que exibe a tela final com a pontuação e distribui as medalhas
function mostrarResultados() {
    document.getElementById('area-quiz').style.display = 'none';
    document.getElementById('tela-resultado').style.display = 'block';
    
    document.getElementById('texto-pontuacao').innerText = `Você acertou ${pontuacaoFinal} de ${perguntasQuiz.length} perguntas!`;
    
    const containerMedalha = document.getElementById('area-medalha');
    containerMedalha.innerHTML = ''; // Limpa medalhas anteriores
    
    // SISTEMA DE GAMIFICAÇÃO: Define o prêmio com base nos acertos
    let medalhaHTML = '';
    if (pontuacaoFinal === 4) {
        medalhaHTML = `
            <div class="medalha-box">
                <div class="medalha-icone">🥇</div>
                <div class="medalha-nome">Guardião Supremo do Solo</div>
                <p style="font-size:12px; margin:5px 0 0 0; color:#666;">Conhecimento perfeito sobre regeneração agrícola!</p>
            </div>
        `;
    } else if (pontuacaoFinal === 3) {
        medalhaHTML = `
            <div class="medalha-box">
                <div class="medalha-icone">🥈</div>
                <div class="medalha-nome">Protetor do Carbono</div>
                <p style="font-size:12px; margin:5px 0 0 0; color:#666;">Excelente desempenho! Você entende os pilares.</p>
            </div>
        `;
    } else {
        medalhaHTML = `
            <div class="medalha-box" style="border-color: #90a4ae;">
                <div class="medalha-icone">🌱</div>
                <div class="medalha-nome">Aprendiz da Terra</div>
                <p style="font-size:12px; margin:5px 0 0 0; color:#666;">Bom começo! Continue estudando para salvar o planeta.</p>
            </div>
        `;
    }
    
    containerMedalha.innerHTML = medalhaHTML;
}

// Função para resetar as variáveis e voltar para o início do jogo
function reiniciarQuiz() {
    document.getElementById('tela-resultado').style.display = 'none';
    document.getElementById('tela-inicial').style.display = 'block';
}