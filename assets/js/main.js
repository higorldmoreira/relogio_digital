// Função para adicionar um zero à esquerda de números menores que 10
const zeroAesquerda = (num) => (num >= 10 ? num : `0${num}`);

// Função para formatar a hora em formato HH:MM:SS
const formataHora = (data) => {
    const hora = zeroAesquerda(data.getHours()); // Obtém as horas e adiciona zero à esquerda se necessário
    const minutos = zeroAesquerda(data.getMinutes()); // Obtém os minutos e adiciona zero à esquerda se necessário
    const segundos = zeroAesquerda(data.getSeconds()); // Obtém os segundos e adiciona zero à esquerda se necessário
    return `${hora}:${minutos}:${segundos}`; // Retorna a hora formatada
};

// Função para formatar a data em formato "Dia da semana, DD de Mês de YYYY"
const formataData = (data) => {
    const dia = zeroAesquerda(data.getDate()); // Obtém o dia do mês e adiciona zero à esquerda se necessário
    const mes = zeroAesquerda(data.getMonth() + 1); // Obtém o mês (adicionando 1 porque os meses são indexados em 0)
    const ano = data.getFullYear(); // Obtém o ano

    // Array com os dias da semana
    const diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    // Array com os meses do ano
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const diaSemana = diasSemana[data.getDay()]; // Obtém o dia da semana
    const mesNome = meses[data.getMonth()]; // Obtém o nome do mês

    // Retorna a data formatada
    return `${diaSemana}, ${dia} de ${mesNome} de ${ano}`;
};

// Função para criar um elemento <p>
const criaP = () => document.createElement("p");

// Função para definir e exibir a data formatada no elemento com id "dataAtual"
const setData = (formataData) => {
    const dataAtual = document.querySelector('#dataAtual'); // Seleciona o elemento com id "dataAtual"
    dataAtual.innerHTML = ""; // Limpa o conteúdo do elemento
    const p = criaP(); // Cria um novo elemento <p>
    p.textContent = formataData; // Define o texto do elemento <p> com a data formatada
    dataAtual.appendChild(p); // Adiciona o elemento <p> ao elemento "dataAtual"
};

// Função para definir e exibir a hora formatada no elemento com id "hora"
const setHora = (formataHora) => {
    const hora = document.querySelector('#hora'); // Seleciona o elemento com id "hora"
    hora.innerHTML = ""; // Limpa o conteúdo do elemento
    const p = criaP(); // Cria um novo elemento <p>
    p.textContent = formataHora; // Define o texto do elemento <p> com a hora formatada
    hora.appendChild(p); // Adiciona o elemento <p> ao elemento "hora"
};

// Define um intervalo para atualizar a data e hora a cada 999 milissegundos (quase 1 segundo)
setInterval(() => {
    const data = new Date(); // Cria uma nova instância de Date para obter a data e hora atuais
    setData(formataData(data)); // Atualiza a data exibida
    setHora(formataHora(data)); // Atualiza a hora exibida
}, 999);
