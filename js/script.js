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
        div.style.cssText=`height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px`;
        div.textContent = 'DIV'
        document.body.append(div)

    } else if (text[0] == '#') {
        let p = document.createElement('p')

        p.setAttribute('id', text.substring(1))
        p.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px`;
        p.textContent = 'P'
        document.body.append(p)
    }
}

const newObj1 = new DomElement('.any-block', 50, 50, 'blue', 20)
const newObj2 = new DomElement('#header', 100, 100, 'red', 18)

newObj1.createElement()
newObj2.createElement()