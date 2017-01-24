const flyd = require('flimflam/flyd')
const h = require('flimflam/h')
const R = require('ramda')
const wizard = require('flimflam/ui/wizard')

const init = () => {
  const currentStep$ = flyd.stream(0)
  const wiz = wizard.init({currentStep$})
  return {wiz, currentStep$}
}

const view = state => {
  const followup = h('p', 'has terminado el mago! salud!')
  return h('div', [
    h('p', 'el mago:')
  , wizard.view(state.wiz, [
      {
        name: 'Step 1'
      , body: h('div', [
          h('p', 'mago paso uno contenido')
        , h('button', {on: {click: [state.wiz.currentStep$, 1]}}, 'Next')
        ])
      }
    , {
        name: 'Step 2'
      , body: h('div', [
          h('p', 'mago paso dos contenido')
        , h('button', {on: {click: [state.wiz.currentStep$, 2]}}, 'Next')
        ])
      }
    , {
        name: 'Step 3'
      , body: h('div', [
          h('p', 'la ultima paso de el mago')
        , h('button', {on: {click: [state.wiz.isCompleted$, true]}}, 'Finish')
        ])
      }
    ], followup)
  ])
}

module.exports = {view, init}
