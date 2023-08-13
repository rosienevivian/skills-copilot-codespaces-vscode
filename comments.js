// Create web server
// Função para calcular a média de uma matriz de números
function calcularMedia(numeros) {
    // Verifica se a matriz está vazia
    if (numeros.length === 0) {
        return 0;
    }

    // Calcula a soma de todos os números na matriz
    const soma = numeros.reduce((total, numero) => total + numero, 0);

    // Calcula a média dividindo a soma pelo número de elementos
    const media = soma / numeros.length;

    return media;
}

// Exemplo de uso da função
const numerosExemplo = [10, 15, 20, 25, 30];
const mediaCalculada = calcularMedia(numerosExemplo);
console.log(`A média dos números é: ${mediaCalculada}`);
