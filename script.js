const randomGiftDiv = document.getElementById('random-gift');
const giftIdeas = [
    "Watch",
    "Jewelry",
    "Cosmetics",
    "Dress",
    "Wine",
    "Chocolates",
    "Headphones",
    "Personalized Mug",
    "Board Game"
]


const generateRandomGiftIdea = () => `${giftIdeas[Math.floor(Math.random()* giftIdeas.length)]}`
const setGiftIdea = () => {
    randomGiftDiv.innerText = generateRandomGiftIdea();
}
document.getElementById('generate').addEventListener('click', setGiftIdea);

setGiftIdea();



