<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">NEUER ZAHNARZT</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Herr','Frau']"
                  label="anrede"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Dr.','Prof. Dr.']"
                  label="titel"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="vorname" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="nachname" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="strasse" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="nummer" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="postleitzahl" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="ort" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="telefon"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="fax"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="back()">abbrechen</v-btn>
          <v-btn color="green" flat @click="create()">speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'CreateDentists',
    methods: {
      create() {
        // make post call to backend
        router.push({name: "Dentists"});
      },
      back() {
        router.go(-1);
      }
    }
  }
</script>
