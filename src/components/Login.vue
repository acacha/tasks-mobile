<template>
    <v-app>
        <v-layout column>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h3>Login</h3>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <form @submit.prevent="login" method="post">
                    <v-layout column>
                        <v-flex>
                            <v-text-field
                                    name="email"
                                    label="Email"
                                    v-model="email"
                                    id="email"
                                    type="email"
                                    required></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                    name="password"
                                    label="Password"
                                    v-model="password"
                                    id="password"
                                    type="password"
                                    required></v-text-field>
                        </v-flex>
                        <v-flex class="text-xs-center" mt-5>
                            <v-btn primary type="submit">Login</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-app>
</template>
<script>
  import * as actions from '../store/action-types'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        console.error('LOGIN PER FER!')
        const credentials = {
          'username': this.email,
          'password': this.password
        }
        this.$store.dispatch(actions.LOGIN, credentials).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
          // TODO -> Mostrar l'error
//          showError(error)
        })
        // TOT AQUI
      }
    }
  }
</script>