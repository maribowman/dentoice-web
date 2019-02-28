<template>
  <div>
    <Login v-if="!authenticated" @authenticated="setAuthenticated"></Login>
    <Home v-else @authenticated="setAuthenticated"></Home>
  </div>
</template>

<script>
  import Login from '@/components/Login'
  import Home from '@/components/Home'

  export default {
    name: 'App',
    components: {
      Login,
      Home
    },
    data: () => ({
      authenticated: false
    }),


    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },

      logout() {
        this.$parent.authenticated = false;
      }
    }
  }
</script>
