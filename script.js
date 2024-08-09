const heroes = [
    // Assassin
    'Aamon', 'Benedetta', 'Fanny', 'Gusion', 'Hayabusa', 'Helcurt', 'Karina', 'Lancelot',
    'Ling', 'Natalia', 'Nolan', 'Selena', 'Yi Sun-shin', 'Joy', 'Hanzo', 'Saber',
    // Fighter
    'Aldous', 'Alpha', 'Alucard', 'Arlott', 'Badang', 'Balmond', 'Bane', 'Chou', 'Cici',
    'Dyrroth', 'Freya', 'Guinevere', 'Hilda', 'Jawhead', 'Julian', 'Khaleed', 'Kaja',
    'Leomord', 'Masha', 'Martis', 'Minisitthar', 'Phoveus', 'Ruby', 'Silvanna', 'Sun',
    'X.Borg', 'Yin', 'Zilong',
    // Mage
    'Alice', 'Aurora', 'Cecilion', 'Chang\'e', 'Cyclops', 'Eudora', 'Esmeralda', 'Gord',
    'Harith', 'Harley', 'Kadita', 'Kagura', 'Lunox', 'Lylia', 'Novaria', 'Odette', 'Pharsa',
    'Valentina', 'Vale', 'Vexana', 'Yve', 'Zhask', 'Zhuxin',
    // Marksman
    'Beatrix', 'Bruno', 'Brody', 'Claude', 'Clint', 'Granger', 'Hanabi', 'Irithel',
    'Ixia', 'Karrie', 'Kimmy', 'Layla', 'Lesley', 'Melissa', 'Miya', 'Moskov', 'Natan',
    'Popol and Kupa', 'Wanwan',
    // Support
    'Angela', 'Carmilla', 'Chip', 'Diggie', 'Estess', 'Floryn', 'Lolita', 'Mathilda', 'Rafaela',
    // Tank
    'Akai', 'Atlas', 'Barats', 'Baxia', 'Belerick', 'Edith', 'Franco', 'Gatotkaca', 'Gloo',
    'Grock', 'Hylos', 'Johnson', 'Khufra', 'Minotaur', 'Uranus', 'Fredrinn'
];

function getRandomHero() {
    const shuffled = [...heroes].sort(() => 0.5 - Math.random());
    return shuffled.pop();
}

document.getElementById('generateButton').addEventListener('click', function() {
    const lanes = ['Gold', 'EXP', 'Mid', 'Jungle', 'Roam'];
    const selectedHeroes = new Set();
    
    while (selectedHeroes.size < 5) {
        selectedHeroes.add(getRandomHero());
    }

    const heroArray = Array.from(selectedHeroes);
    const resultDiv = document.getElementById('result');
    const heroesDiv = document.getElementById('heroes');
    const menuDiv = document.getElementById('menu');

    heroesDiv.innerHTML = '';

    lanes.forEach((lane, index) => {
        const heroElement = document.createElement('div');
        heroElement.textContent = `${lane}: ${heroArray[index]}`;
        heroElement.className = 'hero-list';
        heroesDiv.appendChild(heroElement);
    });

    menuDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
});
