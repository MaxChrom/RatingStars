export class Rating {
  constructor(enteredName) {
    this.name = enteredName
    this.prepareOwnElement()
  }

  prepareOwnElement = () => {
    const element = document.createElement("div")

    element.classList.add("rating")
    element.innerHTML = `
        <div class="rating__value">0</div>
        <h2>${this.name}</h2>
        <div class="rating__stars">
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
        </div>
    `
    this.element = element
  }

  appendSelfToParent = (selector) => {
    const parent = document.querySelector(selector)
    parent.appendChild(this.element)
  }

  makeStarsWorking = () => {
    const stars = this.element.querySelectorAll(".rating__star")
    const textRatingElement = this.element.querySelector(".rating__value")

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        textRatingElement.textContent = `${index + 1}`

        const dataObject = {
          rating_subject: this.name,
          rating_value: textRatingElement.textContent,
        }
        console.log(dataObject)
        const pullData = async () => {
          const response = await fetch(
            "https://test-api.codingbootcamp.cz/api/16b2f748/ratings",
            {
              method: "POST",
              body: JSON.stringify(dataObject),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          const data = await response.json()
          console.log(data)
        }
        pullData()
        stars.forEach((starInner, indexInner) => {
          if (indexInner <= index) {
            starInner.classList.add("rating__star--on")

            console.log(textRatingElement)
          } else {
            starInner.classList.remove("rating__star--on")
          }
        })
      })
    })
  }
}
