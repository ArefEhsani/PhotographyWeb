
/* strat slider header */
function ChangeBackground() {
        const image_urls = [
            "img/header1.jpg",
            "img/header2.jpg",
            "img/header3.jpg"
        ]
    
        random_img = Math.floor(Math.random() * image_urls.length);
    
        document.getElementById("sdsd").style.backgroundImage = `url('${image_urls[random_img]}')`
        document.getElementById("sdsd").style.backgroundRepeat = "no-repeat";
}

setInterval(ChangeBackground,2000)
/* end slider header */


/* strat counter number */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
/* end counter number */



/* strat portfolio */
PlaceOfImage = document.getElementById("image-place")

// This function show you all images on click all
document.getElementById("btn-all").onclick = function() {
    ListOfAll = document.querySelectorAll(".Vertical, .Horizontal")
    console.log(ListOfAll)
    for (let image = 0; image < ListOfAll.length; image++) {
        ListOfAll[image].style.display = "block"
        console.log("In Loop All")
    }
}

// This function Hide all except the Vertical ones
document.getElementById("btn-Horizontal").onclick = function() {
    ListOfCollective = document.querySelectorAll(".Horizontal")
    ListOfIndividualHide = document.querySelectorAll(".Vertical")
    console.log(ListOfCollective);
    for (let image = 0; image < ListOfCollective.length; image++) {
        ListOfCollective[image].style.display = "block"
        console.log("In Loop Horizontal")
    }
    for (let image = 0; image < ListOfIndividualHide.length; image++) {
        ListOfIndividualHide[image].style.display = "none"
        console.log("In Loop Vertical")
    }
}

// This Function hide all except Horizontal ones
document.getElementById("btn-Vertical").onclick = function() {
    ListOfIndividual = document.querySelectorAll(".Vertical")
    ListOfCollectiveHide = document.querySelectorAll(".Horizontal")
    console.log(ListOfIndividual)
    for (let image = 0; image < ListOfIndividual.length; image++) {
        ListOfIndividual[image].style.display = "block"
        console.log("In Loop Vertical")
    }
    for (let image = 0; image < ListOfCollectiveHide.length; image++) {
        ListOfCollectiveHide[image].style.display = "none"
        console.log("In Loop Horizontal")
    }
}
/* end portfolio */