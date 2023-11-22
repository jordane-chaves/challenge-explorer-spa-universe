export class Menu {
  #elements = {
    menuItems: document.querySelectorAll('nav a'),
  }

  registerClick() {
    this.#elements.menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
        this.#removeSelection()

        event.target.classList.add('selected')
      })
    })
  }

  #removeSelection() {
    this.#elements.menuItems.forEach(item => item.classList.remove('selected'))
  }
}
