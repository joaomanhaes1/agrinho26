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
    // Base científica aproximada: 1 hectare manejado de forma regenerativa absorve cerca de 3.6 toneladas de CO2 por ano.
    var totalCarbono = hectares * 3.6;
    
    // 4. EXIBIÇÃO DO SUCESSO: Como o número deu certo, aplica o design verde de sucesso
    caixaResultado.style.display = 'block';          // Faz a caixa aparecer na tela
    caixaResultado.style.backgroundColor = '#e8f5e9'; // Garante o fundo verde claro
    caixaResultado.style.borderLeftColor = '#388e3c'; // Garante a barra lateral verde escura
    
    // Injeta o resultado final com HTML customizado dentro da div
    // .toFixed(1): Limita o resultado do carbono para exibir apenas 1 casa decimal (Ex: 18.0 em vez de 18.00000)
    // Math.round(): Arredonda a conta das árvores para um número inteiro sem quebras.
    caixaResultado.innerHTML = `
        <h4 style="color: #1b5e20; margin-top: 0;"> Resultado Estimado!</h4>
        <p>Adotando a agricultura regenerativa em <strong>${hectares} hectares</strong>, sua propriedade pode sequestrar cerca de <strong>${totalCarbono.toFixed(1)} toneladas</strong> de CO₂ da atmosfera por ano!</p>
        <p style="font-size: 13px; color: #555; margin-bottom: 0;">*Isso equivale ao impacto ambiental positivo de plantar aproximadamente ${Math.round(hectares * 25)} novas árvores!</p>
    `;
}