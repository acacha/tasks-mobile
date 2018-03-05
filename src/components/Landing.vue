<template>
    <v-app>
        <v-container>
            <v-layout column>
                <v-flex xs12 class="text-xs-center" mt-5>
                    <h3>Welcome to Tasks</h3>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 mt-3>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi asperiores aspernatur at atque beatae consequatur consequuntur dolorem ducimus eaque fugit, illum libero, magnam perferendis quisquam tenetur ut vel?
                    </blockquote>
                </v-flex>
                <v-flex class="text-xs-center" mt-5>
                    <template v-if="logged">
                        <v-btn to="/tasks">Home</v-btn>
                    </template>
                    <template v-else>
                        <v-btn to="/register">Register</v-btn>
                        <v-btn to="/login">Login</v-btn>
                    </template>

                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'logged'
      ])
    }
  }
</script>