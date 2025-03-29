// Array de cores de fundo
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // cinza, amarelo, verde

// Capturar input do usuário
const userName = prompt("Qual é o seu nome?");
const colorChoice = prompt("Escolha uma cor de fundo:\n0 para cinza\n1 para amarelo\n2 para verde");

// Armazenar em objeto
const userInfo = { 
    name: userName, 
    selectedColor: colors[colorChoice] 
};

// Verificação de array (requisito)
console.log("A primeira cor no array é:", colors[0]); // deve mostrar o HEX cinza

// Aplicar cor ao fundo
if (userInfo.selectedColor) {
    document.body.style.backgroundColor = userInfo.selectedColor;
    
    // Adicionar saudação personalizada
    if (userInfo.name) {
        const greeting = document.createElement('div');
        greeting.className = 'user-greeting';
        greeting.textContent = `Olá, ${userInfo.name}! Bem-vindo ao Vôlei Passion.`;
        document.querySelector('main').prepend(greeting);
    }
} else {
    console.log("Cor inválida selecionada");
}

// Adicionar interatividade aos cards de jogos
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Você clicou em um jogo! Em breve mais detalhes.');
    });
});