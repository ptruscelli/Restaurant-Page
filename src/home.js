

export function loadHomePage() {
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const homeDiv = document.createElement("div");
    homeDiv.id = "home";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Welcome To Westcroft Steakhouse";
    homeTitle.id = "home-title";

    const homeHeroText = document.createElement("p");
    homeHeroText.id = "home-hero-text";
    homeHeroText.textContent = "Sexy, sexy ribeye deliciousness babehhhh";
    
    const homeText = document.createElement("p");
    homeText.id = "home-paragraph";
    homeText.textContent = "Snackwave solarpunk fit, fingerstache cold-pressed echo park pok pok dolor in austin kale chips laborum vinyl veniam palo santo. Tilde irure hexagon eu messenger bag waistcoat actually.";

    homeDiv.append(homeTitle, homeHeroText, homeText);
    content.appendChild(homeDiv);
};