<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <!--<img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">-->
        <blockquote>
          &#8220;If you cant dodge it, ram it!.&#8221;
          <footer>
            <small>
              <em>&mdash;Mari</em>
            </small>
          </footer>
          <v-btn @click="navigate()">dentists</v-btn>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Hello',
    methods: {
      navigate() {
        router.push({name: "Dentists"});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
