const flyd = require('flimflam/flyd')
const h = require('flimflam/h')
const R = require('ramda')
const validatedForm = require('flimflam/ui/validated-form')
const notification = require('flimflam/ui/notification')

const init = ()=> {
  const constraints = {
    email: {required: true, email: true}
  , age: {required: true, min: 65}
  , password: {required: true, minLength: 7}
  , password_confirmation: {required: true, matchesField: 'password'}
  }
  const messages = {
    age: {min: "You must be at least 65 years old! This is a senior's club"}
  }
  const form = validatedForm.init({constraints, messages})
  const message$ = flyd.map(()=> 'You made a valid submit! Salud!', form.validSubmit$)
  const notif = notification.init({message$})
  return { form , notif }
}

const view = state => {
  const form = validatedForm.form(state.form, 'form')
  const field = validatedForm.field(state.form, 'input')
  return h('div', [
    form({
    }, [
      field({
        props: {type: 'text', name: 'email', placeholder: 'Email address'}
      }, [])
    , field({
        props: {type: 'number', name: 'age', placeholder: 'Your age'}
      }, [])
    , field({
        props: {type: 'password', name: 'password', placeholder: 'New password'}
      }, [])
    , field({
        props: {type: 'password', name: 'password_confirmation', placeholder: 'Confirm password'}
      }, [])
    , h('button', 'Create account')
    ])
  , notification.view(state.notif)
  ])
}

module.exports = {view, init}
