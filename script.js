//EX1
let curso = prompt("Digite o nome do curso (Desenvolvimento de Sistemas, Logística, Administração):").toLowerCase();

switch (curso) {
    case "desenvolvimento de sistemas":
        alert("Curso: Desenvolvimento de Sistemas. Duração: 2 anos. Carga horária: 3000 horas.");
        break;
    case "logística":
        alert("Curso: Logística. Duração: 1,5 anos. Carga horária: 1800 horas.");
        break;
    case "administração":
        alert("Curso: Administração. Duração: 2,5 anos. Carga horária: 2500 horas.");
        break;
    default:
        alert("Curso não encontrado.");
        break;
}

//EX2
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

switch (operacao) {
    case "+":
        alert("Resultado: " + (num1 + num2));
        break;
    case "-":
        alert("Resultado: " + (num1 - num2));
        break;
    case "*":
        alert("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 === 0) {
            alert("Erro: Não é possível dividir por zero.");
        } else {
            alert("Resultado: " + (num1 / num2));
        }
        break;
    default:
        alert("Operação inválida.");
        break;
}

//EX3
let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 0 && idade <= 12) {
    alert("Infantil");
} else if (idade >= 13 && idade <= 17) {
    alert("Adolescente");
} else if (idade >= 18 && idade <= 59) {
    alert("Adulto");
} else if (idade >= 60) {
    alert("Idoso");
} else {
    alert("Idade inválida.");
}

//EX4
let nota = parseFloat(prompt("Digite sua nota de 0 a 10:"));

if (nota >= 0 && nota < 4) {
    alert("Insuficiente");
} else if (nota >= 4 && nota < 6) {
    alert("Regular");
} else if (nota >= 6 && nota < 8) {
    alert("Bom");
} else if (nota >= 8 && nota <= 10) {
    alert("Excelente");
} else {
    alert("Nota inválida.");
}

//EX5
let dia = parseInt(prompt("Digite um número de 1 a 7 para o dia da semana (1 para Domingo, 2 para Segunda, etc.):"));

switch (dia) {
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda-feira");
        break;
    case 3:
        alert("Terça-feira");
        break;
    case 4:
        alert("Quarta-feira");
        break;
    case 5:
        alert("Quinta-feira");
        break;
    case 6:
        alert("Sexta-feira");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Número inválido.");
        break;
}

//EX6
let evento = prompt("Digite o nome do evento (Festa Junina, Semana de Tecnologia, Feira de Profissões):").toLowerCase();

switch (evento) {
    case "festa junina":
        alert("A Festa Junina será no dia 24 de junho. Prepare-se para se divertir!");
        break;
    case "semana de tecnologia":
        alert("A Semana de Tecnologia acontecerá de 10 a 14 de agosto. Prepare-se para workshops e palestras!");
        break;
    case "feira de profissões":
        alert("A Feira de Profissões será no dia 5 de outubro. Não perca a oportunidade de conhecer novas áreas!");
        break;
    default:
        alert("Evento não encontrado.");
        break;
}

//EX7
let mes = parseInt(prompt("Digite um número de 1 a 12 para o mês:"));

switch (mes) {
    case 1:
        alert("Janeiro");
        break;
    case 2:
        alert("Fevereiro");
        break;
    case 3:
        alert("Março");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Maio");
        break;
    case 6:
        alert("Junho");
        break;
    case 7:
        alert("Julho");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Setembro");
        break;
    case 10:
        alert("Outubro");
        break;
    case 11:
        alert("Novembro");
        break;
    case 12:
        alert("Dezembro");
        break;
    default:
        alert("Mês inválido.");
        break;
}

//EX8
let estacao = parseInt(prompt("Digite um número de 1 a 4 para a estação (1 para Verão, 2 para Outono, etc.):"));

switch (estacao) {
    case 1:
        alert("Verão");
        break;
    case 2:
        alert("Outono");
        break;
    case 3:
        alert("Inverno");
        break;
    case 4:
        alert("Primavera");
        break;
    default:
        alert("Estação inválida.");
        break;
}

//EX9
let unidade = prompt("Digite a unidade (cm, m, km):").toLowerCase();
let valor = parseFloat(prompt("Digite o valor a ser convertido para metros:"));

switch (unidade) {
    case "cm":
        alert(valor + " cm = " + (valor / 100) + " metros.");
        break;
    case "m":
        alert(valor + " metros = " + valor + " metros.");
        break;
    case "km":
        alert(valor + " km = " + (valor * 1000) + " metros.");
        break;
    default:
        alert("Unidade inválida.");
        break;
}

//EX10
let conceito = prompt("Digite um conceito (A, B, C, D ou F):");

switch (conceito) {
    case "A":
        alert("Faixa de notas: 9 a 10");
        break;
    case "B":
        alert("Faixa de notas: 7 a 8.9");
        break;
    case "C":
        alert("Faixa de notas: 5 a 6.9");
        break;
    case "D":
        alert("Faixa de notas: 3 a 4.9");
        break;
    case "F":
        alert("Faixa de notas: 0 a 2.9");
        break;
    default:
        alert("Conceito inválido.");
        break;
}

//EX11
let moeda = prompt("Digite a moeda (USD, EUR, GBP):").toUpperCase();
let valorEmReais = parseFloat(prompt("Digite o valor em reais:"));

switch (moeda) {
    case "USD":
        alert(valorEmReais + " reais = " + (valorEmReais / 5.3) + " USD");
        break;
    case "EUR":
        alert(valorEmReais + " reais = " + (valorEmReais / 5.9) + " EUR");
        break;
    case "GBP":
        alert(valorEmReais + " reais = " + (valorEmReais / 7.2) + " GBP");
        break;
    default:
        alert("Moeda inválida.");
        break;
}

//EX12
let tipoCurso = prompt("Digite o tipo de curso (Técnico, Superior, Extensão):").toLowerCase();

switch (tipoCurso) {
    case "técnico":
        alert("Curso Técnico: Focado em habilidades práticas, com duração média de 2 anos.");
        break;
    case "superior":
        alert("Curso Superior: Formação acadêmica completa, com duração média de 4 anos.");
        break;
    case "extensão":
        alert("Curso de Extensão: Aperfeiçoamento e atualização profissional, com duração variável.");
        break;
    default:
        alert("Tipo de curso inválido.");
        break;
}

//EX13
let prioridade = parseInt(prompt("Digite a prioridade (1 para Alta, 2 para Média, 3 para Baixa):"));

switch (prioridade) {
    case 1:
        alert("Prioridade Alta: Urgente e precisa de ação imediata.");
        break;
    case 2:
        alert("Prioridade Média: Importante, mas pode aguardar.");
        break;
    case 3:
        alert("Prioridade Baixa: Tarefa de baixo impacto, pode ser resolvida após as outras.");
        break;
    default:
        alert("Prioridade inválida.");
        break;
}

//EX14
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

alert("Seu IMC é " + imc.toFixed(2) + " - " + classificacao);

//EX15
let documento = prompt("Digite o tipo de documento (RG, CPF, Passaporte):").toUpperCase();

switch (documento) {
    case "RG":
        alert("RG: Documento de identidade do cidadão brasileiro.");
        break;
    case "CPF":
        alert("CPF: Cadastro de Pessoa Física, utilizado para fins fiscais.");
        break;
    case "PASSAPORTE":
        alert("Passaporte: Documento utilizado para viagens internacionais.");
        break;
    default:
        alert("Documento inválido.");
        break;
}

//EX16
let tipoPassageiro = prompt("Digite o tipo de passageiro (Estudante, Trabalhador, Idoso):").toLowerCase();

switch (tipoPassageiro) {
    case "estudante":
        alert("Tarifa: 50% de desconto.");
        break;
    case "trabalhador":
        alert("Tarifa: Preço normal.");
        break;
    case "idoso":
        alert("Tarifa: 50% de desconto.");
        break;
    default:
        alert("Tipo de passageiro inválido.");
        break;
}

//EX17
let tempoExecucao = parseInt(prompt("Digite o tempo de execução em segundos:"));

switch (true) {
    case (tempoExecucao <= 5):
        alert("Rápido");
        break;
    case (tempoExecucao > 5 && tempoExecucao <= 10):
        alert("Moderado");
        break;
    case (tempoExecucao > 10 && tempoExecucao <= 20):
        alert("Lento");
        break;
    case (tempoExecucao > 20):
        alert("Muito Lento");
        break;
    default:
        alert("Tempo inválido.");
        break;
}

//EX18
let deficiencia = prompt("Digite o tipo de deficiência (Visual, Auditiva, Motora):").toLowerCase();

switch (deficiencia) {
    case "visual":
        alert("Assistência: Oferecemos materiais em braille e tecnologia assistiva.");
        break;
    case "auditiva":
        alert("Assistência: Disponibilizamos intérpretes de Libras e legendas.");
        break;
    case "motora":
        alert("Assistência: Temos rampas de acesso e cadeiras de rodas.");
        break;
    default:
        alert("Tipo de deficiência inválido.");
        break;
}

//EX19
let Nota = parseInt(prompt("Digite a nota (0 a 100):"));
let Conceito;

if (Notaota >= 90) {
    Conceito = "A";
} else if (Nota >= 80) {
    Conceito = "B";
} else if (Nota >= 70) {
    Conceito = "C";
} else if (Nota >= 60) {
    Conceito = "D";
} else {
    Conceito = "F";
}

alert("Conceito: " + Conceito);

//EX20
let clima = prompt("Digite a condição climática (Sol, Chuva, Nublado):").toLowerCase();

switch (clima) {
    case "sol":
        alert("Preparação: Use roupas leves e protetor solar.");
        break;
    case "chuva":
        alert("Preparação: Leve um guarda-chuva.");
        break;
    case "nublado":
        alert("Preparação: Leve uma jaqueta leve, pode esfriar.");
        break;
    default:
        alert("Condição climática inválida.");
        break;
}
