const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.createElement = function () {
    let text = this.selector
    if(text[0] == '.') {
        let div = document.createElement('div')

        div.classList.add(text.substring(1))
        div.style.cssText=`height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
        div.textContent = 'DIV'
        let body = document.querySelector('body')
        body.insertBefore(div, null)

    } else if (text[0] == '#') {
        let p = document.createElement('p')

        p.setAttribute('id', text.substring(1))
        p.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
        p.textContent = 'P'
        let body = document.querySelector('body')
        body.insertBefore(p, null)
    }
}

DomElement.prototype.createSquare = function () {
    let text = this.selector

    let div = document.createElement('div')

    div.classList.add(text.substring(1))
    div.style.cssText=`height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: absolute;`;
    let body = document.querySelector('body')
    body.insertBefore(div, null)
}

const newObj1 = new DomElement('.any-block', 50, 50, 'blue', 20)
const newObj2 = new DomElement('#header', 100, 100, 'red', 18)
const squareEl = new DomElement('.square', 100, 100, 'orange', 20)

newObj1.createElement()
newObj2.createElement()

document.addEventListener("DOMContentLoaded", squareEl.createSquare());

let square = document.querySelector('.square')
let leftArrow = 0;
let topArrow = 0;
document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft') {
        leftArrow -= 10
        square.style.left = leftArrow+'px'

    } else if (event.code == 'ArrowRight') {
        leftArrow += 10
        square.style.left = leftArrow+'px'

    } else if (event.code == 'ArrowUp') {
        topArrow -= 10
        square.style.top = topArrow+'px'

    } else if (event.code == 'ArrowDown') {
        topArrow += 10
        square.style.top = topArrow+'px'
    }
  });
