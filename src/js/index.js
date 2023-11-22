import { Router } from './router.js'
import { Menu } from './menu.js'

const router = new Router()
const menu = new Menu()

router.add('/', '/src/pages/home.html')
router.add('/universe', '/src/pages/universe.html')
router.add('/exploration', '/src/pages/exploration.html')
router.add(404, '/src/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

menu.registerClick()
