const services = {
    beleza: [
        { img: 'beleza1.jpg', description: 'Corte de cabelo, maquiagem e mais.', link: 'https://wa.me/5531999999999' },
        { img: 'beleza2.jpg', description: 'Penteado e cuidados com a pele.', link: 'https://wa.me/5531888888888' }
    ],
    presentes: [
        { img: 'presente1.jpg', description: 'Presentes criativos e personalizados.', link: 'https://wa.me/5531777777777' }
    ],
    automoveis: [
        { img: 'automoveis1.jpg', description: 'Venda e manutenção de automóveis.', link: 'https://wa.me/5531666666666' }
    ],
    saude: [
        { img: 'saude1.jpg', description: 'Consultas médicas e terapias.', link: 'https://wa.me/5531555555555' }
    ],
    viagens: [
        { img: 'viagens1.jpg', description: 'Pacotes de viagens e turismo.', link: 'https://wa.me/5531444444444' }
    ],
    tv: [
        { img: 'tv1.jpg', description: 'Planos de TV e internet.', link: 'https://wa.me/5531333333333' }
    ],
    corretores: [
        { img: 'corretor1.jpg', description: 'Compra e venda de imóveis.', link: 'https://wa.me/5531222222222' }
    ],
    comidas: [
        { img: 'comida1.jpg', description: 'Restaurantes e delivery.', link: 'https://wa.me/5531111111111' }
    ]
};

function showCategory(category) {
    const container = document.getElementById('service-details');
    container.innerHTML = '';

    if (services[category]) {
        services[category].forEach(service => {
            const item = document.createElement('div');
            item.className = 'service-item';
            item.innerHTML = `
                <img src="${service.img}" alt="Imagem do serviço">
                <p>${service.description}</p>
                <a href="${service.link}" target="_blank">Contato via WhatsApp</a>
            `;
            container.appendChild(item);
        });
    } else {
        container.innerHTML = '<p>Não há serviços disponíveis para esta categoria.</p>';
    }
}
