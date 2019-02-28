<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">NEUE MONATSRECHNUNG</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-select
                  :items="['Fraser','Vohrer', 'Ademi']"
                  label="zahnarzt"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-menu :close-on-content-click="true"
                        v-model="fromPicker"
                        lazy
                        reactive
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                  <v-text-field slot="activator"
                                v-model="fromDate"
                                prepend-icon="event"
                                label="von"
                                readonly
                  ></v-text-field>
                  <v-date-picker v-model="fromDate"
                                 @click="fromDate = false"
                                 first-day-of-week="1"
                                 locale="de-de"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm6>
                <v-menu :close-on-content-click="true"
                        v-model="toPicker"
                        lazy
                        reactive
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                  <v-text-field slot="activator"
                                v-model="toDate"
                                prepend-icon="event"
                                label="bis"
                                readonly
                  ></v-text-field>
                  <v-date-picker v-model="toDate"
                                 @click="toDate = false"
                                 first-day-of-week="1"
                                 locale="de-de"
                  ></v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs12>
                <v-data-table
                  :headers="headers"
                  :items="invoices"
                  item-key="number"
                  hide-actions
                  no-data-text="keine rechnungen vorhanden"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{props.item.date}}</td>
                    <td>{{props.item.number}}</td>
                    <td>{{props.item.patient}}</td>
                    <td>{{props.item.sum}}</td>
                  </template>
                </v-data-table>
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
  export default {
    name: 'CreateMonthlyInvoice',
    data: () => ({
      fromDate: new Date().toISOString().substr(0, 10),
      fromPicker: '',
      toDate: new Date().toISOString().substr(0, 10),
      toPicker: '',
      headers: [
        {
          text: "datum",
          value: "date",
          sortable: false
        },
        {
          text: "nummer",
          value: "number",
          sortable: false
        },
        {
          text: "patient",
          value: "patient",
          sortable: false
        },
        {
          text: "betrag (€)",
          value: "sum",
          sortable: false
        }
      ],
      invoices: []

    }),

    created() {
      this.initialize()
    },

    methods: {
      create() {
        // make post call to backend
        this.$router.push({name: "Invoices"});
      },

      back() {
        this.$router.go(-1);
      },

      initialize() {
        this.invoices = [
          {
            date: "01.10.2018",
            number: "011018",
            patient: "patient 1",
            sum: "650.00"
          },
          {
            date: "03.10.2018",
            number: "031018",
            patient: "patient 2",
            sum: "128.25"
          },
          {
            date: "04.09.2018",
            number: "040918",
            patient: "patient 3",
            sum: "68.95"
          },
          {
            date: "23.06.2018",
            number: "230618",
            patient: "patient 4",
            sum: "1.856,13"
          }
        ];
      }
    }
  }
</script>
