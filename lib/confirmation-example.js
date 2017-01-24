const flyd = require('flimflam/flyd')
const h = require('flimflam/h')
const R = require('ramda')
const confirmation = require('flimflam/ui/confirmation')

const view = state => {
  return h('div', [
    confirmation.view(state.conf, {
      prompt: 'Are you sure? (This text is customizable)'
    , confirmText: 'Muy seguro'
    , denyText: 'No!'
    })
  ])
}

module.exports = view
