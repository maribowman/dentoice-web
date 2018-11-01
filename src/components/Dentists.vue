<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field name="first_name"
                        placeholder="vorname"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="last_name"
                        placeholder="nachname"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="street"
                        placeholder="strasse"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="zip"
                        placeholder="postleitzahl"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="city"
                        placeholder="ort"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="phone"
                        placeholder="telefon"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="fax"
                        placeholder="fax"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="email"
                        placeholder="email"
                        readonly="true"
          >
          </v-text-field>
        </v-flex>
        <v-btn @click="navigate()">hello</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Dentists',
    methods: {
      navigate() {
        router.push({name: "Hello"});
      }
    }
  }
</script>
