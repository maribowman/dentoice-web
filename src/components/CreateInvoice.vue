<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">RECHNUNG ANLEGEN</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="patient" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Fraser','Vohrer', 'Ademi']"
                  label="zahnarzt"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="type"
                               row
                               mandatory
                >
                  <v-radio label="kasse" value="radio-1"></v-radio>
                  <v-radio label="privat" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="kind"
                               row
                               mandatory
                >
                  <v-radio label="rechnung" value="radio-1"></v-radio>
                  <v-radio label="kv" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>


              <v-flex xs12>
                <v-menu :close-on-content-click="true"
                        v-model="datePicker"
                        :nudge-right="40"
                        lazy
                        reactive
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="200px"
                >
                  <!--<v-text-field slot="activator"-->
                                <!--v-model="date"-->
                                <!--prepend-icon="event"-->
                                <!--readonly-->
                  <!--&gt;</v-text-field>-->
                  <v-date-picker v-model="date"
                                 landscape
                                 @click="datePicker = false"
                                 first-day-of-week="1"
                                 locale="de-de"
                  ></v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="patient" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="create()">abbrechen</v-btn>
          <v-btn color="green" flat @click="create()">speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'CreateInvoice',
    type: '',
    kind: '',
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      datePicker: ''
    }),
    methods: {
      create() {
        // make post call to backend
        router.push({name: "Invoices"});
      },
      back() {
        router.go(-1);
      }
    }
  }
</script>
