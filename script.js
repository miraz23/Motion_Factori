
/*----------------------------------------- header -----------------------------------------*/


const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#131313';
        header.style.filter = 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.8))';
        header.style.transition = 'background-color 0.3s ease, filter 0.3s ease';
    } 
    else {
        header.style.backgroundColor = 'transparent';
        header.style.filter = 'none';
        header.style.transition = 'background-color 0.3s ease, filter 0.3s ease';
    }
});


const menuIcon = document.getElementById('nav-menu-icon');
const mobileMenu = document.getElementById('nav-menu');
const closeMenu = document.querySelector('.nav-menu-close');

menuIcon.addEventListener('click', function() {
    mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
});

/*----------------------------------------- faq -----------------------------------------*/

function faq(element){
    const content = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    content.classList.toggle('active');
    icon.classList.toggle('rotated');
}


/*----------------------------------------- process -----------------------------------------*/


//slider

const Process = document.querySelectorAll('.process');
const processPrevButton = document.querySelector('.process-button-prev');
const processNextButton = document.querySelector('.process-button-next');

let processCurrentIndex = 0;

function updateProcessPosition() {
    const offset = processCurrentIndex * - 60;
    Process.forEach((process, index) => {
        process.style.transform = `translateX(${offset}%)`;
        process.style.transition = `0.3s ease-in-out`
    });
}

processNextButton.addEventListener('click', () => {
    if (processCurrentIndex < Process.length - 3) {
        processCurrentIndex++;
        updateProcessPosition();
    }
});

processPrevButton.addEventListener('click', () => {
    if (processCurrentIndex > 0) {
        processCurrentIndex--;
        updateProcessPosition();
    }
});

updateProcessPosition();



// hover effects

document.querySelectorAll('.process').forEach((item, index) => {

    const hoverTexts = [
        "Want Your Audience To Watch Your Entire Video? Get It Done With Our Highly Engaging Edits! Retention-Based Edits Is The Easiest Way To Increase Your Watch Time Which Boosts The YouTube Algorithm To Push Out Your Content To The Mass Audience.",
        "Want your audience to stop scrolling? Get our clickable/ killer thumbnails that is sure to get the CTR high. A compelling thumbnail makes your content more eye-catching, appealing, the higher the CTR the higher your views!",
        "Did you know 80% of your ranking depends on a good title? Dont worry! We generate banger/crazy titles for you. Titles spark curiosity, and help you reach to the top of YouTube search result through proper keywords and tags.",
        "Killer videos but no reach? Our team helps you rank first on YouTube with proper SEO optimization & tags. SEO helps you rank better as well as pop up in YouTube’s suggested videos.",
        "8 seconds is all you get for your viewers attention! Want to get your reels viral? Get the best hooks from your existing videos! Hooks get you the immediate engagements and cut down the click-away rates to almost 50%."
    ];
    
    const originalTexts = [
        { h1: "200%", h3: "VIEWS INCREASE" },
        { h1: "15%", h3: "CTR INCREASE" },
        { h1: "10%", h3: "MORE CLICKS" },
        { h1: "30%", h3: "MORE VIEWS" },
        { h1: "5x", h3: "MORE ENGAGEMENT" }
    ];

    item.addEventListener('mouseenter', () => {
        
        const h1 = item.querySelector('h1');
        const h3 = item.querySelector('h3');

        h1.textContent = hoverTexts[index];

        h1.style.fontSize = '20px';
        h1.style.textAlign = "left"
        h3.style.display = 'none';
    });

    item.addEventListener('mouseleave', () => {

        const h1 = item.querySelector('h1');
        const h3 = item.querySelector('h3');
        
        h1.textContent = originalTexts[index].h1;
        h3.textContent = originalTexts[index].h3;

        h1.style.fontSize = '96px';
        h1.style.textAlign = "center"
        h3.style.display = '';
    });
});


/*----------------------------------------- strategy -----------------------------------------*/


const strategies = Array.from(document.querySelectorAll('.strategy'));
const prevButton = document.querySelector('.strategy-button-prev');
const nextButton = document.querySelector('.strategy-button-next');

let currentIndex = 0;

function updateStrategyPosition() {

    const screenWidth = window.innerWidth;
    let offsetMultiplier;

    if (screenWidth <= 768) {
        offsetMultiplier = 360;
    } 
    else {
        offsetMultiplier = 130;
    }

    strategies.forEach((strategy, index) => {
        const offset = ((index - currentIndex + strategies.length) % strategies.length) * offsetMultiplier;
        const zIndex = strategies.length - Math.abs((index - currentIndex + strategies.length) % strategies.length);
        strategy.style.transform = `translateX(${offset}px)`;
        strategy.style.zIndex = zIndex;
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % strategies.length;
    updateStrategyPosition();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + strategies.length) % strategies.length;
    updateStrategyPosition();
});

window.addEventListener('resize', updateStrategyPosition);
updateStrategyPosition();
