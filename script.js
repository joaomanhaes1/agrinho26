function diagnosticar(tipo) {
    // Busca a caixinha de resultado no HTML
    var caixaResultado = document.getElementById('resultado-diagnostico');
    
    // Se não encontrar a caixinha, avisa no console do navegador para sabermos o erro
    if (!caixaResultado) {
        console.error("Erro: A div id='resultado-diagnostico' não foi encontrada no HTML.");
        return;
    }

    if (tipo === 'convencional') {
        caixaResultado.innerHTML = '<h4>⚠️ Alerta de Desgaste</h4><p>O uso contínuo de químicos e o revolvimento do solo trazem lucro rápido, mas destroem os microrganismos. Com o tempo, a terra precisará de cada vez mais adubo para produzir.</p>';
        caixaResultado.style.borderLeft = '6px solid #d32f2f';
        caixaResultado.style.backgroundColor = '#ffebee';
        
    } else if (tipo === 'sem-cuidado') {
        caixaResultado.innerHTML = '<h4>🍂 Risco de Erosão</h4><p>Deixar o solo exposto ao sol e à chuva faz a água evaporar rápido e leva os nutrientes embora. A terra fica fraca, compactada e propensa a rachaduras.</p>';
        caixaResultado.style.borderLeft = '6px solid #f57c00';
        caixaResultado.style.backgroundColor = '#fff3e0';
        
    } else if (tipo === 'regenerativo') {
        caixaResultado.innerHTML = '<h4>🌱 Solo Vivo e Forte!</h4><p><strong>Excelente escolha!</strong> Ao usar plantio direto e rotação de culturas, a terra retém mais água, o carbono fica preso no solo alimentando a biodiversidade e a sua produção fica protegida contra secas!</p>';
        caixaResultado.style.borderLeft = '6px solid #388e3c';
        caixaResultado.style.backgroundColor = '#e8f5e9';
    }
}