

export function loadAboutPage() {
    
    const content = document.querySelector("#content")
    content.innerHTML = "";

    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about";
    
    const aboutLeft = document.createElement("div");
    aboutLeft.id = "about-left";
    
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "The Westcroft Story";
    aboutTitle.id = "about-title";
    
    const aboutHeroText = document.createElement("p");
    aboutHeroText.id = "about-hero-text";
    aboutHeroText.textContent = "It all started with a bit of hipster ipsum.";
    
    const aboutText1 = document.createElement("p");
    aboutText1.className = "about-text";
    aboutText1.textContent = "Artisanal kombucha meditation, flannel sriracha beard craft beer sustainable vinyl. Pug asymmetrical hot chicken, kinfolk gastropub DIY occupy chillwave tattooed mumblecore. Shabby chic pickled quinoa, retro kale chips unicorn disrupt echo park neutra. Copper mug chartreuse paleo, wayfarers thundercats schlitz pitchfork microdosing ethical YOLO. Selfies cronut literally, chia seed air plant tumeric direct trade organic gluten-free.";
    
    const aboutText2 = document.createElement("p");
    aboutText2.className = "about-text";
    aboutText2.textContent = "Fixie vegan slow-carb, seitan portland craft beer messenger bag hell of. Tacos knausgaard adaptogen, williamsburg tousled hoodie literally subway tile pabst. Biodiesel activated charcoal polaroid, street art post-ironic skateboard before they sold out raclette. Poke twee flannel, craft beer blue bottle cred sustainable iPhone taxidermy. Marfa 8-bit leggings, chambray authentic listicle hashtag bushwick.";
    
    const aboutRight = document.createElement("div");
    aboutRight.id = "about-right";
    
    const aboutImage = document.createElement("div");
    aboutImage.id = "about-image";
    aboutImage.textContent = "image";
    
    aboutLeft.append(aboutTitle, aboutHeroText, aboutText1, aboutText2);
    aboutRight.appendChild(aboutImage);
    aboutDiv.append(aboutLeft, aboutRight);
    content.appendChild(aboutDiv);

}