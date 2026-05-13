// MOBILE MENU
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// HERO PARALLAX
document.addEventListener("mousemove", (e)=>{
  const bg = document.getElementById("heroBg");
  const scene = document.getElementById("heroScene");
  if(!bg || !scene) return;

  const x = (e.clientX - window.innerWidth/2) * 0.02;
  const y = (e.clientY - window.innerHeight/2) * 0.02;

  bg.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
  scene.style.transform = `translate(${x*1.6}px, ${y*1.6}px)`;
});

// CART SYSTEM
let cart = [];

function addToCart(name, price){
  cart.push({name, price});
  updateCartUI();
}

function updateCartUI(){
  const cartCount = document.getElementById("cartCount");
  const cartPopup = document.getElementById("cartPopup");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if(cartCount) cartCount.innerText = cart.length;

  if(cartItems){
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item)=>{
      total += item.price;
      cartItems.innerHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <span>KSh ${item.price}</span>
        </div>
      `;
    });

    if(cartTotal) cartTotal.innerText = "KSh " + total;
  }

  if(cartPopup) cartPopup.classList.add("show");
}

function toggleCart(){
  const cartPopup = document.getElementById("cartPopup");
  if(cartPopup) cartPopup.classList.toggle("show");
}

// MERCH FILTER
function filterProducts(category){
  const products = document.querySelectorAll(".product");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  document.getElementById("filter-" + category).classList.add("active");

  products.forEach((p)=>{
    const cat = p.getAttribute("data-category");
    if(category === "all" || cat === category){
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

// ABC DATA
const abcData = {
  A: { objects: [{name:"Apple", icon:"🍎"}, {name:"Ant", icon:"🐜"}, {name:"Airplane", icon:"✈️"}]},
  B: { objects: [{name:"Ball", icon:"⚽"}, {name:"Banana", icon:"🍌"}, {name:"Bird", icon:"🐦"}]},
  C: { objects: [{name:"Cat", icon:"🐱"}, {name:"Car", icon:"🚗"}, {name:"Cake", icon:"🍰"}]},
  D: { objects: [{name:"Dog", icon:"🐶"}, {name:"Drum", icon:"🥁"}, {name:"Duck", icon:"🦆"}]},
  E: { objects: [{name:"Elephant", icon:"🐘"}, {name:"Egg", icon:"🥚"}, {name:"Eagle", icon:"🦅"}]},
  F: { objects: [{name:"Fish", icon:"🐟"}, {name:"Flower", icon:"🌸"}, {name:"Frog", icon:"🐸"}]},
  G: { objects: [{name:"Guitar", icon:"🎸"}, {name:"Goat", icon:"🐐"}, {name:"Grapes", icon:"🍇"}]},
  H: { objects: [{name:"Hat", icon:"🎩"}, {name:"Horse", icon:"🐴"}, {name:"House", icon:"🏠"}]},
  I: { objects: [{name:"Ice Cream", icon:"🍦"}, {name:"Igloo", icon:"🏔️"}, {name:"Insect", icon:"🪲"}]},
  J: { objects: [{name:"Jam", icon:"🍯"}, {name:"Jaguar", icon:"🐆"}, {name:"Jacket", icon:"🧥"}]},
  K: { objects: [{name:"Kite", icon:"🪁"}, {name:"Key", icon:"🔑"}, {name:"Kangaroo", icon:"🦘"}]},
  L: { objects: [{name:"Lion", icon:"🦁"}, {name:"Leaf", icon:"🍃"}, {name:"Lamp", icon:"💡"}]},
  M: { objects: [{name:"Moon", icon:"🌙"}, {name:"Monkey", icon:"🐒"}, {name:"Mango", icon:"🥭"}]},
  N: { objects: [{name:"Nest", icon:"🪺"}, {name:"Nose", icon:"👃"}, {name:"Notebook", icon:"📒"}]},
  O: { objects: [{name:"Orange", icon:"🍊"}, {name:"Owl", icon:"🦉"}, {name:"Octopus", icon:"🐙"}]},
  P: { objects: [{name:"Pencil", icon:"✏️"}, {name:"Parrot", icon:"🦜"}, {name:"Pumpkin", icon:"🎃"}]},
  Q: { objects: [{name:"Queen", icon:"👑"}, {name:"Quail", icon:"🐦"}, {name:"Question", icon:"❓"}]},
  R: { objects: [{name:"Rabbit", icon:"🐇"}, {name:"Rainbow", icon:"🌈"}, {name:"Robot", icon:"🤖"}]},
  S: { objects: [{name:"Sun", icon:"☀️"}, {name:"Star", icon:"⭐"}, {name:"Snake", icon:"🐍"}]},
  T: { objects: [{name:"Tiger", icon:"🐯"}, {name:"Tree", icon:"🌳"}, {name:"Train", icon:"🚆"}]},
  U: { objects: [{name:"Umbrella", icon:"☂️"}, {name:"Unicorn", icon:"🦄"}, {name:"Ukulele", icon:"🎸"}]},
  V: { objects: [{name:"Violin", icon:"🎻"}, {name:"Van", icon:"🚐"}, {name:"Volcano", icon:"🌋"}]},
  W: { objects: [{name:"Whale", icon:"🐋"}, {name:"Water", icon:"💧"}, {name:"Watch", icon:"⌚"}]},
  X: { objects: [{name:"Xylophone", icon:"🎼"}, {name:"X-ray", icon:"🩻"}, {name:"Box", icon:"📦"}]},
  Y: { objects: [{name:"Yak", icon:"🐂"}, {name:"Yo-yo", icon:"🪀"}, {name:"Yam", icon:"🍠"}]},
  Z: { objects: [{name:"Zebra", icon:"🦓"}, {name:"Zoo", icon:"🏛️"}, {name:"Zipper", icon:"🧷"}]},
};

let currentLetter = "A";

function loadLetter(letter){
  currentLetter = letter;

  const stage = document.getElementById("abcStage");
  const letterTitle = document.getElementById("letterTitle");
  const wordLabel = document.getElementById("wordLabel");

  if(!stage || !letterTitle) return;

  document.querySelectorAll(".letter-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById("letter-" + letter);
  if(activeBtn) activeBtn.classList.add("active");

  stage.innerHTML = `<h2 id="letterTitle">${letter}</h2>`;
  if(wordLabel) wordLabel.innerText = "Click an object!";

  const objects = abcData[letter].objects;

  objects.forEach((obj, i)=>{
    const div = document.createElement("div");
    div.className = "object";
    div.style.left = (20 + i*30) + "%";
    div.style.top = (50 + (i%2)*20) + "%";
    div.innerHTML = obj.icon;

    div.onclick = ()=>{
      if(wordLabel) wordLabel.innerText = obj.name;
      div.style.transform = "scale(1.4) rotate(8deg)";
      setTimeout(()=> div.style.transform="scale(1)", 400);
    };

    stage.appendChild(div);
  });
}

function magicTrigger(){
  const objects = document.querySelectorAll(".object");
  objects.forEach((o)=>{
    o.animate([
      { transform: "translateY(0px) scale(1)" },
      { transform: "translateY(-30px) scale(1.2)" },
      { transform: "translateY(0px) scale(1)" }
    ], { duration: 700, iterations: 1 });
  });
}

function speakWord(){
  const label = document.getElementById("wordLabel");
  if(!label) return;

  const text = label.innerText;
  if(text === "Click an object!") return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  speechSynthesis.speak(utter);
}