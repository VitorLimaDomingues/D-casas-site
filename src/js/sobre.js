// Declarando as variáveis

let imagens = [
    "src/assets/Aline.png",
    "src/assets/Marcelo.png",
    "src/assets/Adao.png",
    "src/assets/Juninho.png"
]

let descricoes = [
    {
        titulo: "Aline de Lima Domingues - Engenheira Cívil",
        descricao: "Formada em engenharia-cívil a mais de 4 anos. Aline de Lima Domingues se destaca na Engenharia Civil por sua dedicação e competência em cada projeto que assume. Com uma visão técnica apurada e uma habilidade excepcional em gerenciar equipes e prazos, ela é capaz de transformar desafios complexosem soluções práticas e inovadoras. Seu comprometimento com a qualidade e a eficiência faz com que suas construções sejam não apenas funcionais, mas também sustentáveise de alta durabilidade. Além disso, Aline demonstra uma capacidade única de se adaptar a novas tecnologias e tendências do mercado, mantendo-se sempre à frente. Sua ética de trabalho e atenção aos detalhes a tornam uma referência em sua área."
    },
    {
        titulo: "Marcelo de Lima Domingues - Arquiteto e Urbanista",
        descricao: "Formado em arquitetura a mais de 7 anos. Marcelo de Lima Domingues é um arquiteto com um talento ímpar para transformar ideias em espaços únicos e funcionais. Sua capacidade de harmonizar estética, funcionalidade e inovação faz com que seus projetos se destaquem pela originalidade e eficiência. Sempre atento às necessidades dos clientes, Marcelo traz soluções criativas que atendem tanto ao aspecto visual quanto ao prático. Ele possui uma visão detalhista e um profundo conhecimento técnico, garantindo que cada projeto seja executado com precisão e qualidade. Além disso, sua habilidade em trabalhar com equipes multidisciplinares e coordenar todos os aspectos de uma obra reforça sua excelência na profissão."
    },
    {
        titulo: "Adão Domingues - Mestre de obras",
        descricao: "Com mais de 30 anos de experiência. Adão Domingues, como Mestre de Obras, é conhecido por sua vasta experiência e habilidade em coordenar equipes e garantir que cada etapa de uma construção seja realizada com precisão. Ele possui um conhecimento profundo dos processos construtivos, o que lhe permite identificar e resolver problemas rapidamente no canteiro de obras. Sua liderança firme, porém colaborativa, inspira confiança e respeito de todos que trabalham ao seu lado. Adão também tem um olhar atento para a qualidade e segurança, assegurando que cada projeto seja entregue dentro dos prazos e com os mais altos padrões. Sua dedicação e compromisso o tornam um pilar essencial em qualquer obra."
    },
    {
        titulo: "Adão Domingues Júnior - Eletricista",
        descricao: "Adão Domingues Junior é eletricista formado pelo SENAI, com sólida experiência em instalações elétricas residenciais e comerciais. Durante seu curso no SENAI, Adão aprimorou suas habilidades técnicas, com foco em segurança, eficiência energética e em conformidade com as normas regulamentadoras. Sua expertise é aplicada em diversas áreas, incluindo a instalação elétrica de casas pré-fabricadas, onde garante que todos os sistemas sejam instalados de maneira segura e eficiente. Com atenção aos detalhes e compromisso com a qualidade, Adão oferece soluções práticas para cada projeto, sempre com foco na satisfação do cliente e no desempenho sustentável das instalações elétricas."
    }
]

let i = 0
let time = 10000

function slideShow(){
    const imageElement = document.getElementById('image')
    const tituloElement = document.querySelector('#descricao')
    const descricaoElement = document.querySelector('.descricao')
    const textContentElement = document.querySelector('.text-content')

    imageElement.style.opacity = 0
    textContentElement.style.opacity = 0

    setTimeout(() => {
        imageElement.src = imagens[i]
        tituloElement.textContent = descricoes[i].titulo
        descricaoElement.textContent = descricoes[i].descricao

        imageElement.style.opacity = 1
        textContentElement.style.opacity = 1
    }, 1000)

    i++;
    if (i == imagens.length) {
        i = 0;
    }

    setTimeout(slideShow, time)
}

slideShow()