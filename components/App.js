import { html, Component } from '../js/preacthtm.js'
import '../js/dior.js'
import getRandomValues from 'https://cdn.skypack.dev/randombytes'
import Navbar from '../components/Navbar1.js'
import handleMutation from '../js/handlemutation.js'

var privkey = getRandomValues(32)
var title = 'Random Values'

console.log(di.data)

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    console.log('handle mutations')
    handleMutation('data', this.processMutation)
  }

  processMutation() {
    console.log('process mutation!')
    this.setState({ mutation: true })
  }

  render() {
    return html`
    <${Navbar} title="${title}" />

    <div class="bg-gray-100">
      <div class=" px-10 font-bold text-green-600 py-3">
      ${Array.from(privkey)}
      </div>
    </div>`
  }

}
