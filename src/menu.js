

class MenuItem {
   constructor(name, description, price) {
       this.name = name;
       this.description = description;
       this.price = price;
       this.element = this.createElement();
   }

   createElement() {
       const menuItem = document.createElement("div");
       menuItem.className = "menu-item";

       const itemInfo = document.createElement("div");
       itemInfo.className = "item-info";

       const itemName = document.createElement("h3");
       itemName.className = "item-name";
       itemName.textContent = this.name;

       const itemDescription = document.createElement("p");
       itemDescription.className = "item-description";
       itemDescription.textContent = this.description;

       const itemPrice = document.createElement("span");
       itemPrice.className = "item-price";
       itemPrice.textContent = this.price;

       itemInfo.append(itemName, itemDescription);
       menuItem.append(itemInfo, itemPrice);

       return menuItem;
   }
}



const startersData = [
   {
       name: "Truffle Arancini",
       description: "Wild mushroom risotto balls, parmesan, rocket",
       price: "£12"
   },
   {
       name: "Seared Scallops",
       description: "Pan-seared, cauliflower purée, pancetta crisp",
       price: "£16"
   },
   {
       name: "Beef Carpaccio",
       description: "Thinly sliced raw beef, capers, parmesan shavings",
       price: "£14"
   },
   {
       name: "Burrata & Fig",
       description: "Fresh burrata, roasted figs, prosciutto, balsamic glaze",
       price: "£13"
   },
   {
       name: "Duck Liver Parfait",
       description: "Smooth parfait, toasted brioche, red onion chutney",
       price: "£11"
   }
];

const steaksData = [
   {
       name: "Ribeye",
       description: "28-day aged, 300g, triple-cooked chips, watercress",
       price: "£32"
   },
   {
       name: "Sirloin",
       description: "Prime cut, 250g, peppercorn sauce, seasonal veg",
       price: "£28"
   },
   {
       name: "Fillet",
       description: "Tender 200g cut, garlic butter, roasted tomatoes",
       price: "£38"
   },
   {
       name: "T-Bone",
       description: "Sharing cut 500g, bone marrow, rosemary potatoes",
       price: "£45"
   }
];


export function loadMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    const menuTitle = document.createElement("h1");
    menuTitle.id = "menu-title";
    menuTitle.textContent = "Dinner Menu";

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    // Create starters section
    const startersSection = document.createElement("div");
    startersSection.id = "starters";

    const startersTitle = document.createElement("h2");
    startersTitle.className = "section-title";
    startersTitle.textContent = "Starters";
    startersSection.appendChild(startersTitle);

    // Add starter items
    startersData.forEach(item => {
        const menuItem = new MenuItem(item.name, item.description, item.price);
        startersSection.appendChild(menuItem.element);
    });

    // Create steaks section
    const steaksSection = document.createElement("div");
    steaksSection.id = "steaks";
    
    const steakImage = document.createElement("div");
    steakImage.id = "steak-image";
    steakImage.textContent = "image";
    
    const steaksTitle = document.createElement("h2");
    steaksTitle.className = "section-title";
    steaksTitle.textContent = "Classic Steaks";
    
    steaksSection.append(steakImage, steaksTitle);
    
    // Add steak items
    steaksData.forEach(item => {
        const menuItem = new MenuItem(item.name, item.description, item.price);
        steaksSection.appendChild(menuItem.element);
    });
    
    menuContainer.append(startersSection, steaksSection);
    menuDiv.append(menuTitle, menuContainer);
    content.appendChild(menuDiv);
}
