import CountUp from '../dist/main.js'
import '../dist/main.css'
const appId = document.querySelector('#app')
const app = new CountUp(appId)

app.render(20000)


setInterval(() => {
  const random = Math.floor(10000000000 * Math.random())
  console.log(random)
  app.render(random)
}, 15000)


