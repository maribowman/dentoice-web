<template>
  <v-container>
    <v-text-field v-model="input.username" placeholder="name">username</v-text-field>
    <v-text-field type="password" v-model="input.password" placeholder="passwort">password</v-text-field>
    <v-checkbox v-model="checked" label="I bims keins Gerhard"/>
    <v-btn v-on:click="login()">login</v-btn>
    <v-spacer/>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      input: {
        username: "",
        password: ""
      },
      credentials: {
        username: "",
        password: ""
      }
      , checked: ''
    }),


    methods: {
      login() {
        if (this.input.username != "" && this.input.password != "") {
          if (this.checked && this.input.username == this.credentials.username && this.input.password == this.credentials.password) {
            this.$emit("authenticated", true);
            this.$router.push({name: 'Invoices'})
          } else {
            alert("name und/oder passwort falsch");
          }
        } else {
          alert("name und passwort dürfen nicht leer sein");
        }
      }
    }
  }
</script>
