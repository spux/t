// import './index.css'

import { html, render } from './preacthtm.js'
import './dior.js'
import getRandomValues from 'https://cdn.skypack.dev/randombytes'
import Navbar from '../components/Navbar1.js'

var privkey = getRandomValues(32)
var title = 'Random Values'

console.log(di.data)

render(html`

<${Navbar} title="${title}" />

<div class="bg-gray-100">
  <div class=" px-10 font-bold text-green-600 py-3">
    ${Array.from(privkey)}
    </div>
</div>

`, document.body)

