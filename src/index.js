console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imgContainer = document.querySelector("#dog-image-container");
  
    function renderImg(message) {
  
      message.message.forEach((mess) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const h1 = document.createElement("h1");
        h1.textContent = message.status;
  
        const img = document.createElement("img");
        img.src = mess;
  
        card.append(h1);
        card.append(img);
  
        imgContainer.append(card);
      });
    }
  
    fetch(imgUrl)
      .then((res) => res.json())
      .then((message) => renderImg(message));
  
    //-------------------------------------------------------
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedContainer = document.querySelector("#dog-breeds");
    
    function renderBreed(breeds) {
      Object.keys(breeds).forEach((breed) => {
        const card = document.createElement("div");
        card.classList.add("card");
    
        const h2 = document.createElement("h2");
        h2.classList.add("h2");
        h2.textContent = breed;
    
        card.append(h2);
        breedContainer.append(card);
      });
    }
    
    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => renderBreed(data.message))
      .catch((error) => console.log(error));
  
      
      function changeColor() {
          breedContainer.addEventListener("click", (event) => {
              if(event.target.style.color ==="initial"){
                  event.target.style.color = "red"
              } else(event.target.style.color = "initial")
            
          });
        }
        
        changeColor();
        
      
  
        function filterBreed() {
          const select = document.getElementById("breed-dropdown");
          const selectedLetter = select.value;
        
          const cards = breedContainer.querySelectorAll(".card");
          cards.forEach((card) => {
            const breedName = card.querySelector("h2").textContent;
            if (breedName.startsWith(selectedLetter)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        }
        
        // Add event listener to the select element
        document.getElementById("breed-dropdown").addEventListener("change", filterBreed);
        
        
  });
  