const temples = [
    {
        templeName: "Salt Lake",
        location: "Utah",
        dedicated: "2027, April, 1",
        area: 435600,
        imageUrl: "images/SLC temple.jpeg"
    },
    {
        templeName: "Quito",
        location: "Quito – Ecuador",
        dedicated: "2022, November, 20",
        area: 172497.6,
        imageUrl: "images/Quito temple.jpg"
    },
    {
        templeName: "Rio de Janeiro",
        location: "Brazil",
        dedicated: "2022, May, 8",
        area: 411206.4,
        imageUrl: "images/R temple.jpeg"
    },
    {
        templeName: "Los Olivos",
        location: "Lima – Peru",
        dedicated: "2024, January, 14",
        area: 107157.6,
        imageUrl: "images/LO temple.jpeg"
    },
    {
        templeName: "Cochabamba",
        location: "Bolivia",
        dedicated: "2000, April, 30",
        area: 107157.6,
        imageUrl: "images/C temple.jpeg"
    },
    {
        templeName: "Lima",
        location: "Lima – Peru",
        dedicated: "1986, January, 10",
        area: 196020,
        imageUrl: "images/L temple.jpeg"
    },
    {
        templeName: "Guayaquil",
        location: "Ecuador",
        dedicated: "1999, August, 1",
        area: 270072,
        imageUrl: "images/G temple.jpeg"
    },
    {
        templeName: "Cusco",
        location: "Cusco – Peru",
        dedicated: "2022, April, 3",
        area: 108028.8,
        imageUrl: "images/Cu temple.jpeg"
    },
    {
        templeName: "Bogota",
        location: "Botota, Colombia",
        dedicated: "2022, May, 8",
        area: 161607.6,
        imageUrl: "images/B temple.jpeg"
    },
    {
        templeName: "Burley",
        location: "Burley – Idaho",
        dedicated: "2026, January, 11",
        area: 439956,
        imageUrl: "images/burley.jpg"
    }
];

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split(', ');
    const months = {
        January: 'Jan', February: 'Feb', March: 'Mar', April: 'Apr',
        May: 'May', June: 'Jun', July: 'Jul', August: 'Aug',
        September: 'Sep', October: 'Oct', November: 'Nov', December: 'Dec'
    };
    return `${day} ${months[month]} ${year}`;
}

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}">
        <div class="temple-info">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${formatDate(temple.dedicated)}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
        </div>
    `;
    return card;
}

function displayTemples(filter = 'home') {
    const container = document.getElementById('templeContainer');
    container.innerHTML = '';
    let filtered = temples;

    if (filter === 'old') filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 2000);
    if (filter === 'new') filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) >= 2000);
    if (filter === 'large') filtered = temples.filter(t => t.area / 43560 > 6);
    if (filter === 'small') filtered = temples.filter(t => t.area / 43560 <= 6);

    filtered.forEach(t => container.appendChild(createTempleCard(t)));
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        document.getElementById('sectionTitle').textContent = link.textContent;
        displayTemples(link.dataset.filter);
    });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

displayTemples();
