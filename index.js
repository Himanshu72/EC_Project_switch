const gateway = require('fast-gateway')
const PORT = process.env.PORT || 8080

gateway({
  middlewares: [
    require('cors')(),
    require('helmet')()
  ],

  routes: [{
    prefix: '/dietservice',
    target: 'https://switchdiet.herokuapp.com/'
  }, {
    prefix: '/foodservice',	
    target: 'https://switchfood.herokuapp.com/'
  }]
}).start(PORT).then(server => {
  console.log(`API Gateway listening on ${PORT} port!`)
})