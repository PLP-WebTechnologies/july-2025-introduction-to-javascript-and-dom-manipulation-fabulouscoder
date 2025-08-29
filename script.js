// --- Part 1: Mastering JavaScript Basics ---
// Goal: Demonstrate understanding of variables, data types, operators, and conditionals.

// Variable declarations
let pageTitle = "Lagos, The Commercial Hub of Africa";
let visitorAge = 25;
const country = "Nigeria";
let isCityDynamic = true;

// A simple conditional statement to log a message based on a variable
if (isCityDynamic) {
    console.log("The city of Lagos is a bustling and dynamic urban center.");
} else {
    console.log("The city's environment is static.");
}

// Another conditional to demonstrate a simple decision
let populationEstimate = 22000000;
if (populationEstimate > 20000000) {
    console.log(`Lagos has a population greater than 20 million people. Current estimate: ${populationEstimate}`);
} else {
    console.log("Lagos has a large population, but it's less than 20 million.");
}


// --- Part 2: JavaScript Functions ---
// Goal: Build reusable blocks of logic.

// Function 1: A function that takes a string and formats it
function formatCityInfo(cityName, status) {
    return `${cityName} is recognized as a ${status} city.`;
}

// Function 2: A function to calculate a simple growth percentage.
function calculateGrowthPercentage(initialValue, finalValue) {
    if (initialValue <= 0) {
        return "Initial value must be greater than zero.";
    }
    const growth = ((finalValue - initialValue) / initialValue) * 100;
    return growth.toFixed(2); // Return a string with 2 decimal places
}

// Use the functions and log the results
let cityStatus = formatCityInfo("Lagos", "major commercial hub");
console.log(cityStatus);

let initialGDP = 75; // in billions USD
let currentGDP = 84; // in billions USD
let gdpGrowth = calculateGrowthPercentage(initialGDP, currentGDP);
console.log(`Lagos's GDP has grown by approximately ${gdpGrowth}% from $${initialGDP}B to $${currentGDP}B.`);


// --- Part 3: JavaScript Loops ---
// Goal: Practice controlling flow with repetition and iteration.

// Loop 1: Using a for loop to populate a list on the page
const keyIndustries = ["Nollywood (Film Industry)", "Oil & Gas", "Technology & Startups", "Financial Services", "Manufacturing"];
const industryList = document.getElementById('industry-list');

for (let i = 0; i < keyIndustries.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = keyIndustries[i];
    industryList.appendChild(listItem);
}

// Loop 2: Using a forEach loop to log each industry to the console
console.log("Here's a list of key industries in Lagos:");
keyIndustries.forEach((industry, index) => {
    console.log(`${index + 1}. ${industry}`);
});


// --- Part 4: Mastering the DOM with JavaScript ---
// Goal: Show skill in making a static HTML page interactive.

// DOM Interaction 1: Change the text of an element on click
const learnMoreBtn = document.getElementById('learn-more-btn');
const introSection = document.getElementById('introduction');

learnMoreBtn.addEventListener('click', function() {
    introSection.querySelector('p').textContent = "Lagos is the economic engine of Nigeria, a major financial center, and a cultural hub with significant influence across Africa. Its population, one of the largest on the continent, drives a diverse economy from tech to entertainment.";
});

// DOM Interaction 2: Toggle a CSS class on an element
const toggleColorBtn = document.getElementById('toggle-color-btn');
const commercialSection = document.getElementById('commercial-significance');

toggleColorBtn.addEventListener('click', function() {
    commercialSection.classList.toggle('highlighted');
});

// DOM Interaction 3: Create new elements on the fly
const addFactBtn = document.getElementById('add-fact-btn');
const dynamicContentDiv = document.getElementById('dynamic-content');

const lagosFacts = [
    "Lagos is one of the fastest-growing cities in the world.",
    "The city has the second-highest GDP of any city in Africa.",
    "Lagos State is smaller in size than many other Nigerian states but has the highest population.",
    "The city's nickname is 'Eko,' which means 'a place to rest' in the local Yoruba language."
];

addFactBtn.addEventListener('click', function() {
    const factIndex = Math.floor(Math.random() * lagosFacts.length);
    const newFact = document.createElement('p');
    newFact.classList.add('fact');
    newFact.textContent = lagosFacts[factIndex];
    dynamicContentDiv.appendChild(newFact);
});