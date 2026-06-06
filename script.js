function diagnosticar(tipo) {
    // Pega a caixinha de resultado do HTML
    const caixaResultado = document.getElementById('resultado-diagnostico');
    
    if (tipo === 'convencional') {
        caixaResultado.innerHTML = `
            <h4 style="color: #d32f2f;">⚠️ Alerta de Desgaste</h4>
            <p>O uso contínuo de químicos e o revolvimento do solo trazem lucro rápido, mas destroem os microrganismos. Com o tempo, a terra precisará de cada vez mais adubo para produzir.</p>
        `;
        caixaResultado.style.borderLeftColor = '#d32f2f'; // Borda Vermelha
        caixaResultado.style.backgroundColor = '#ffebee';
        
    } else if (tipo === 'sem-cuidado') {
        caixaResultado.innerHTML = `
            <h4 style="color: #f57c00;">🍂 Risco de Erosão</h4>
            <p>Deixar o solo exposto ao sol e à chuva faz a água evaporar rápido e leva os nutrientes embora. A terra fica fraca, compactada e propensa a rachaduras.</p>
        `;
        caixaResultado.style.borderLeftColor = '#f57c00'; // Borda Laranja
        caixaResultado.style.backgroundColor = '#fff3e0';
        
    } else if (tipo === 'regenerativo') {
        caixaResultado.innerHTML = `
            <h4 style="color: #388e3c;">🌱 Solo Vivo e Forte!</h4>
            <p><strong>Excelente escolha!</strong> Ao usar plantio direto e rotação de culturas, a terra retém mais água, o carbono fica preso no solo alimentando a biodiversidade e a sua produção fica protegida contra secas!</p>
        `;
        caixaResultado.style.borderLeftColor = '#388e3c'; // Borda Verde
        caixaResultado.style.backgroundColor = '#e8f5e9';
    }
}