import { Rating } from "./Rating"
import { EmptyDiv } from "./EmptyDiv"

// const firstRating = new Rating(0)

// console.log(firstRating)
// firstRating.appendSelfToParent("#widget")

const textRatingElement = document.querySelector(".rating__value")
const stars = document.querySelectorAll(".rating__star")

// stars.forEach((star, index) => {
//   star.addEventListener("click", () => {
//     stars.forEach((starInner, indexInner) => {
//       if (indexInner <= index) {
//         starInner.classList.add("rating__star--on")
//         textRatingElement.textContent = `${index + 1}`
//       } else {
//         starInner.classList.remove("rating__star--on")
//       }
//     })
//   })
// })

const firstRating = new Rating("First Product")
firstRating.prepareOwnElement()
firstRating.appendSelfToParent("body")
firstRating.makeStarsWorking()

const secondRating = new Rating("Second Product")
secondRating.prepareOwnElement()
secondRating.appendSelfToParent("body")
secondRating.makeStarsWorking()

const thirdRating = new Rating("Third Product")
thirdRating.prepareOwnElement()
thirdRating.appendSelfToParent("body")
thirdRating.makeStarsWorking()

// let empyDiv = new EmptyDiv()

// document.querySelector("body").appendChild(empyDiv.divElement)
// empyDiv.appendToBody()
