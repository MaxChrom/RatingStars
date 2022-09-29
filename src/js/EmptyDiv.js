export class EmptyDiv {
  constructor() {
    this.newElement()
    this.appendToBody()
  }

  newElement = () => {
    let divElement = document.createElement("button")
    console.log(divElement)
    this.divElement = divElement
  }
  appendToBody = () => {
    document.querySelector("body").appendChild(this.divElement)
  }
}
