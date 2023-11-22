export class Router {
  routes = {}

  /**
   * @param {string|number} path - Page pathname - Example: `/contacts`
   * @param {string} page - HTML page path - Example: `/src/pages/universe.html`
   */
  add(path, page) {
    this.routes[path] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then(data => data.text())
      .then(html => document.querySelector('#app').innerHTML = html)
  }
}
