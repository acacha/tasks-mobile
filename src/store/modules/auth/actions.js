import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import auth from '../../../api/auth'
import axios from 'axios'

export default {
  [ actions.LOGIN ] (context, credentials) {
    return new Promise((resolve, reject) => {
      auth.login(credentials).then(response => {
        context.commit(mutations.LOGGED, true)
        const token = response.data.access_token
        console.log('TOKEN:')
        console.log(token)
        if (token) {
          if (window.localStorage) {
            window.localStorage.setItem('token', token)
          }
          context.commit(mutations.TOKEN, token)
          axios.defaults.headers.common['authorization'] = `Bearer ${token}`
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
