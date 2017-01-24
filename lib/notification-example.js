const flyd = require('flimflam/flyd')
const h = require('flimflam/h')
const R = require('ramda')
const notification = require('flimflam/ui/notification')

const init = () => {
  const message$ = flyd.stream()
  const notif = notification.init({message$})
  return {message$, notif}
}

const view = state => {
  return h('div', [
    notification.view(state.notif)
  ])
}

module.exports = {view, init}
