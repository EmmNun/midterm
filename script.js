// Array de cores
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Capturar input do usuário
const userName = prompt("Qual é o seu nome?");
const colorChoice = prompt("Escolha uma cor de fundo: 0 para cinza, 1 para amarelo, 2 para verde");

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
        greeting.textContent = `Olá, ${userInfo.name}! Bem-vindo ao Vôlei Passion.`;
        greeting.style.padding = '10px';
        greeting.style.backgroundColor = 'rgba(0,0,0,0.1)';
        greeting.style.margin = '10px 0';
        greeting.style.borderRadius = '4px';
        document.querySelector('main').prepend(greeting);
    }
} else {
    console.log("Cor inválida selecionada");
}