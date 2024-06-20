const zeroAesquerda = (num) => (num >= 10 ? num : `0${num}`);

const formataHora = (data) => {
    const hora = zeroAesquerda(data.getHours());
    const minutos = zeroAesquerda(data.getMinutes());
    const segundos = zeroAesquerda(data.getSeconds());
    return `${hora}:${minutos}:${segundos}`;
};

const formataData = (data) => {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = data.getFullYear();

    const diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const diaSemana = diasSemana[data.getDay()];
    const mesNome = meses[data.getMonth()];

    return `${diaSemana}, ${dia} de ${mesNome} de ${ano}`;
};

const criaP = () => document.createElement("p");

const setData = (formataData) => {
    const dataAtual = document.querySelector('#dataAtual');
    dataAtual.innerHTML = "";
    const p = criaP();
    p.textContent = formataData;
    dataAtual.appendChild(p);
};

const setHora = (formataHora) => {
    const hora = document.querySelector('#hora');
    hora.innerHTML = "";
    const p = criaP();
    p.textContent = formataHora;
    hora.appendChild(p);
};

setInterval(() => {
    const data = new Date();
    setData(formataData(data));
    setHora(formataHora(data));
}, 300);
