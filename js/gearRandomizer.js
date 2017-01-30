var headgears = [];
var clothing = [];
var shoes = [];
var brands = [];
var mains = [];
var hBrand = [];
var cBrand = [];
var sBrand = [];
var hMain = [];
var cMain = [];
var sMain = [];
var left = false;
var i = 0;
function init() {
  $(document).ready(function(){  
      $("#randomizer").click(function() {
        changeHeadgear();
        $("#randomizer").animate({left: '20px'}); 
        $("#randomizer").animate({left: '-20px'});
        $("#randomizer").animate({left: '0px'});
      });
    });
    window.headgears = ["18K Aviators", "Armor Helmet Replica", "B-ball Headband",
     "Backwards Cap", "Bamboo Hat", "Bike Helmet", "Black Arrowbands", "Blowfish Bell Hat",
      "Bobble Hat", "Camo Mesh", "Camping Hat", "Classic Straw Boater",
       "CoroCoro Cap", "Cycle King Cap", "Cycling Cap", "Designer Headphones",
        "Fake Contacts", "FishFry Visor", "Five-Panel Cap", "Full Moon Glasses",
        "Gas Mask", "Golf Visor", "Hero Headset Replica", "Jet Cap",
         "Jogging Headband", "Jungle Hat", "Legendary Cap", "Lightweight Cap",
          "Noise Cancelers", "Octoglasses", "Octoling Goggles", "Paintball Mask",
           "Paisley Bandana", "Pilot Goggles", "Power Mask", "Retro Specs",
            "Safari Hat", "Samurai Helmet", "Short Beanie", "Skate Helmet",
             "Skull Bandana", "Soccer Headband", "Snorket Mask",
              "Special Forces Beret", "Splash Goggles", "Sporty Bobble Hat",
               "Squash Headband", "SQUID GIRL Hat", "Squid Nordic",
                "Squid Hairclip", "Squid-Stitch Cap", "Squidvader Cap",
                 "Stealth Goggles", "Straw Boater", "Streetstyle Cap",
                  "Striped Beanie", "Studio Headphones", "Sun Visor",
                   "Takoroka Mesh", "Tennis Headband", "Tentacles Headband",
                    "Tinted Shades", "Traditional Headband", "Treasure Hunter",
                     "Two-Stripe Mesh", "Urchins Cap", "Visor Skate Helmet",
                      "White Arrowbands", "White Headband", "Zekko Mesh"];
    window.clothing = ["Aloha Shirt", "Anchor Sweat", "Armor Jacket Replica", "B-ball Jersey(Away)", "B-ball Jersey(Home)",
    "Baby-Jelly Shirt", "Baseball Jersey", "Basic Tee", "Berry Ski Jacket", "Black 8-Bit FishFry", "Black Anchor Tee", "Black Baseball LS",
    "Black Inky Rider", "Black Layered LS", "Black LS", "Black Pipe Tee", "Black Polo", "Black Squideye", "Black Tee", "Blue Peaks Tee",
    "Blue Sailor Suit", "Camo Layered LS", "Camo Zip Hoodie", "Carnivore Tee", "Choco Layered LS", "CoroCoro Hoodie", "Cycle King Jersey",
    "Cycling Shirt", "Dark Urban Vest", "FC Albacore", "Firefin Navy Sweat", "Forest Vest", "Forge Inkling Parka", "Forge Octarian Jacket", "Fugu Tee", "Grape Tee",
    "Gray College Sweat", "Gray Mixed Shirt", "Gray Vector Tee", "Green Cardigan", "Green Striped LS", "Green Tee", "Green Zip Hoodie", "Green-Check Shirt",
    "Herbivore Tee", "Hero Jacket Replica", "Ivory Peaks Tee", "Krak-On 528", "Layered Anchor LS", "Layered Vector LS", "Linen Shirt", "Logo Aloha Shirt",
    "Lumberjack Shirt", "Mint Tee", "Mountain Vest", "Navy College Sweat", "Navy Striped LS", "Octo Tee", "Octoling Armor", "Olive Ski Jacket", "Orange Cardigan",
    "Part-Time Pirate", "Pearl Tee", "Pirate-Stripe Tee", "Power Armor", "Purple Camo LS", "Rainy-Day Tee", "Red Vector Tee", "Red-Check Shirt", "Reel Sweat", "Reggae Tee",
    "Retro Gamer Jersey", "Retro Sweat", "Rockenberg Black", "Rockenberg White", "Rodeo Shirt", "Round-Collar Shirt", "Sage Polo", "Sailor-Stripe Tee", "Samurai Jacket",
    "School Jersey", "School Uniform", "Shirt & Tie", "Shrimp-Pink Polo", "Sky-Blue Squideye", "Slipstream United", "SQUID GIRL Tunic", "Squid Satin Jacket", "Squid-Pattern Waistcoat",
    "Squid-Stitch Tee", "Squidmark LS", "Squidmark Sweat", "Squidstar Waistcoat", "Striped Peaks LS", "Striped Rugby", "Striped Shirt", "Sunny-Day Tee", "Traditional Apron",
    "Tricolor Rugby", "Urchins Jersey", "Varsity Baseball LS", "Varsity Jacket", "Vintage Check Shirt", "White 8-Bit fishFry", "White Anchor Tee", "White Baseball LS", "White Inky Rider",
    "White Layered LS", "White Line Tee", "White LS", "White Sailor Suit", "White Shirt", "White Striped LS", "White Tee", "Yellow Layered LS", "Yellow Urban Vest",
    "Zapfish Satin Jacket", "Zekko Baseball LS", "Zekko Hoodie", "Zink Layered LS", "Zink LS"];
    window.shoes = ["Acerola Rain Boots", "Armor Boot Replicas", "Banana Basics", "Black Seahorses", "Black Trainers", "Blue Lo-Tops", "Blue Moto Boots",
    "Blue Sea Slugs", "Blue Slip-Ons", "Blueberry Casuals", "Bubble Rain Boots", "Cherry Kicks", "Choco Clogs", "Clownfish Basics", "Crazy Arrows", "Cream Basics",
    "Cream Hi-Tops", "Custom Trail Boots" ,"Cyan Trainers", "Gold Hi-Horses", "Green Rain Boots", "Hero Runner Replicas", "Hunter Hi-Tops", "Icy Down Boots", "LE Lo-Tops", 
    "LE Soccer Cleats", "Mawcasins", "Moto Boots", "Neon Sea Slugs", "Octoling Boots", "Orange Arrows", "Orange Lo-Tops", "Oyster Clogs", "Pink Trainers", "Plum Casuals",
    "Power Boots", "Pro Trail Boots", "Punk Cherries", "Punk Whites", "Punk Yellows", "Purple Hi-Horses", "Purple Sea Slugs", "Red Hi-Horses", "Red Hi-Tops", "Red Sea Slugs",
    "Red Slip-Ons", "Red Work Boots", "Roasted Brogues", "Samurai Shoes", "School Shoes", "Shark Moccasins", "Snowy Down Boots", "Soccer Cleats", "SQUID GIRL Shoes", "Squid-Stitch Slip-Ons",
    "Squink Wingtips", "Strapping Reds", "Strapping Whites", "Tan Work Boots", "Traditional Sandals", "Trail Boots", "Turquoise Kicks", "White Arrows", "White Kicks", "White Seahorses",
    "Yellow Seahorses", "Zombie Hi-Horses"];
    window.brands = ["amiibo", "Cuttlgear", "Famitsu", "Firefin", "Forge", 
      "Inkline", "KOG", "Krak-on", "Rockenberg", "Skalop", "Splash Mob",
      "SquidForce", "Takoroka", "Tentatek", "The SQUID GIRL", "Zekko", "Zink"];
    window.mains = ["Bomb Range Up", "Bomb Sniffer", "Cold Blooded", "Comeback",
      "Damage Up", "Defense Up", "Haunt", "Ink Recovery Up",
      "Ink Resistance Up", "Ink Saver (Main)", "Ink Saver (Sub)",
      "Last-Ditch Effort", "Ninja Squid", "Opening Gambit", "Quick Respawn",
      "Quick Super Jump", "Recon", "Run Speed Up", "Special Charge Up",
      "Special Duration Up", "Special Saver", "Stealth Jump", "Swim Speed Up",
      "Tenacity"];
    window.hBrand = [8,1,16,15,5,9,15,3,10,3,5,9,15,13,16,4,13,3,15,
    7,4,16,1,3,15,3,1,5,4,3,1,4,7,4,0,10,4,0,5,9,4,13,4,4,4,9,16,14,9,0,9,9,4,
    9,9,10,4,13,12,13,4,15,2,4,7,9,9,15,11,15]; 
    window.cBrand = [4,11,1,16,16,10,3,11,5,3,11,8,8,11,15,6,15,13,11,5,4,11,3,3,12,
    15,13,16,3,12,3,5,4,4,3,9,10,15,12,10,5,4,3,15,3,1,5,7,11,12,10,15,8,9,5,10,10,1,
    1,5,10,13,9,10,0,12,7,12,15,15,9,16,11,8,8,7,8,10,10,0,16,0,10,10,13,12,14,15,7,9,
    11,11,7,5,12,10,7,2,12,16,10,15,8,3,11,8,8,11,6,11,4,10,10,11,11,3,15,15,15,16,16];
    window.sBrand = [5,1,7,16,13,15,8,13,7,7,5,8,7,7,12,7,7,5,13,16,5,1,7,13,15,12,10,8,
    13,1,12,15,7,13,7,0,5,8,8,8,16,13,16,7,13,7,8,8,0,0,10,13,12,14,7,8,10,10,8,2,5,8,
    12,8,16,16,16];
    window.hMain = [11,23,13,14,9,7,23,7,15,22,19,19,4,5,0,10,18,18,3,15,23,17,17,20,10,
    9,4,22,14,11,0,3,10,0,5,14,11,4,9,20,20,23,4,13,5,23,4,16,3,22,13,18,22,15,10,13,
    9,0,5,3,17,11,3,7,20,0,11,19,7,15];
    window.cMain = [];
    window.sMain = [];
}


function changeHeadgear() {
    headgearNumber= Math.floor(Math.random()*70);
    clothingNumber= Math.floor(Math.random()*121);
    shoeNumber= Math.floor(Math.random()*67);
    $("#headgear").attr("src", "https://torisaur.github.io/images/headgear/headgear" + headgearNumber + ".png");
    $("#headgear").attr("width", "60px"); 
    $("#hBrandPic").attr("src", "https://torisaur.github.io/images/brands/brand" + hBrand[headgearNumber] + ".png"); 
    document.getElementById("hName").innerHTML = headgears[headgearNumber];
    document.getElementById("hBrand").innerHTML = brands[hBrand[headgearNumber]];
    document.getElementById("hBrandPic").src="https://torisaur.github.io/images/brands/brand" + hBrand[headgearNumber] + ".png"; 
    document.getElementById("hMain").innerHTML= mains[hMain[headgearNumber]];
    $("#hMainPic").attr("width", "50px"); 
    document.getElementById("hMainPic").src="https://torisaur.github.io/images/abilities/ability" + hMain[headgearNumber] + ".png";

    $("#clothing").attr("src", "https://torisaur.github.io/images/clothing/clothing" + clothingNumber + ".png");
    $("#clothing").attr("width", "60px"); 
    document.getElementById("cName").innerHTML = clothing[clothingNumber];
    document.getElementById("cBrand").innerHTML = brands[cBrand[clothingNumber]];
    document.getElementById("cBrandPic").src="https://torisaur.github.io/images/brands/brand" + cBrand[clothingNumber] + ".png"; 
    document.getElementById("cMain").innerHTML= mains[cMain[clothingNumber]];
    $("#cMainPic").attr("width", "50px"); 
    document.getElementById("cMainPic").src="https://torisaur.github.io/images/abilities/ability" + cMain[clothingNumber] + ".png";

    $("#shoe").attr("src", "https://torisaur.github.io/images/shoes/shoe" + shoeNumber + ".png");
    $("#shoe").attr("width", "60px"); 
    document.getElementById("sName").innerHTML = shoes[shoeNumber];
    document.getElementById("sBrand").innerHTML = brands[sBrand[shoeNumber]];
    document.getElementById("sBrandPic").src="https://torisaur.github.io/images/brands/brand" + sBrand[shoeNumber] + ".png"; 
    document.getElementById("sMain").innerHTML= mains[sMain[shoeNumber]];
    $("#sMainPic").attr("width", "50px"); 
    document.getElementById("sMainPic").src="https://torisaur.github.io/images/abilities/ability" + sMain[shoeNumber] + ".png";
}