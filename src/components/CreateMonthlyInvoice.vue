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
              <v-flex xs12 sm6>
                <v-select v-model="dentist"
                          :items="dentists"
                          :item-text="item => item.firstName + ' ' + item.lastName"
                          label="zahnarzt"
                          required
                          return-object
                          single-line
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-slider v-model="skonto"
                          label="skonto in %"
                          min="0"
                          max="10"
                          thumb-label="always"
                ></v-slider>
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
                <v-data-table v-model="selected"
                              :headers="headers"
                              :items="invoices"
                              select-all
                              item-key="id"
                              hide-actions
                              no-data-text="keine rechnungen vorhanden"
                >
                  <template slot="headers" slot-scope="props">
                    <tr>
                      <th>
                        <v-checkbox :input-value="props.all"
                                    :indeterminate="props.indeterminate"
                                    primary
                                    hide-details
                                    @click.stop="toggleAll"
                        ></v-checkbox>
                      </th>
                      <th v-for="header in props.headers">
                        {{header.text}}
                      </th>
                    </tr>
                  </template>
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected"
                        @click="props.selected = !props.selected">
                      <td>
                        <v-checkbox :input-value="props.selected"
                                    primary
                                    hide-details
                        ></v-checkbox>
                      </td>
                      <td class="text-xs-center">{{ props.item.date }}</td>
                      <td class="text-xs-center">{{ props.item.id }}</td>
                      <td class="text-xs-center">{{ props.item.patient}}</td>
                      <td class="text-xs-center">{{ props.item.brutto}}</td>
                    </tr>
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
  import axios from 'axios';

  export default {
    name: 'CreateMonthlyInvoice',
    data: () => ({
      dentists: [],
      dentist: null,
      skonto: 3,
      fromDate: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString().substr(0, 10),
      fromPicker: '',
      toDate: new Date().toISOString().substr(0, 10),
      toPicker: '',
      invoices: [],
      selected: [],
      headers: [
        {
          text: "datum",
          value: "date",
          sortable: false
        },
        {
          text: "nummer",
          value: "id",
          sortable: false
        },
        {
          text: "patient",
          value: "patient",
          sortable: false
        },
        {
          text: "betrag (€)",
          value: "brutto",
          sortable: false
        }
      ]
    }),


    mounted() {
      this.getDentists();
      this.getInvoices();
    },


    watch: {
      dentist: function () {
        this.getInvoices()
      },
      fromPicker: function () {
        this.getInvoices()
      },
      toPicker: function () {
        this.getInvoices()
      }
    },

    methods: {
      getInvoices() {
        if (!this.dentist) {
          return;
        }
        axios
          .get(`http://localhost:9876/invoices/from/${this.fromDate}/to/${this.toDate}?dentist=${this.dentist.id}`)
          .then(response => (this.invoices = response.data))
          .catch(error => alert.log(error));
      },

      getDentists() {
        axios
          .get('http://localhost:9876/dentists')
          .then(response => (this.dentists = response.data))
          .catch(error => alert.log(error));
      },

      create() {
        axios.post('http://localhost:9876/monthlies/create',
          {
            headers: {
              'Content-Type': 'application/json',
            }
          },
          {
            data: {
              dentist: this.dentist.id,
              date: new Date().toISOString().substr(0, 10),
              skonto: this.skonto,
              invoices: this.selected
                .map((invoice) => {
                  return invoice.id;
                })
            }
          })
          .then(response => {
            console.log(response);
            if (response.status === 201) {
              this.$router.push({name: "MonthlyInvoices"});
            }
          })
          .catch(error => {
            let errorString = '';
            for (const i in error.response.data.errors) {
              errorString += ('\n -> ' + error.response.data.errors[i].field + ' - ' + error.response.data.errors[i].defaultMessage);
            }
            alert(error.response.data.status + ' ' + error.response.data.error + errorString)
          });
      },

      update() {
        axios.patch(`http://localhost:9876/monthlies/${this.$route.params.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          },
          {
            data: {
              dentist: this.dentist.id,
              xmlNumber: this.xml,
            }
          })
          .then(response => {
            console.log(response);
            if (response.status === 200) {
              this.$router.push({name: "Invoices"});
            }
          })
          .catch(error => {
            let errorString = '';
            for (const i in error.response.data.errors) {
              errorString += ('\n -> ' + error.response.data.errors[i].field + ' - ' + error.response.data.errors[i].defaultMessage);
            }
            alert(error.response.data.status + ' ' + error.response.data.error + errorString)
          });
      },

      loadInvoice(id) {
        axios
          .get(`http://localhost:9876/invoices/${id}`)
          .then(response => {
              this.dentist = response.data.dentist;
              this.patient = response.data.patient;
              this.color = response.data.color;
              this.description = response.data.description;
              this.xml = response.data.xmlNumber;
              this.invoiceType = response.data.invoiceType;
              this.insuranceType = response.data.insuranceType;
              this.date = response.data.date;
              this.mwst = response.data.mwst;
              this.efforts = response.data.costs.efforts;
              this.materials = response.data.costs.materials
            }
          )
          .catch(error => alert.log(error));
      },

      toggleAll() {
        if (this.selected.length) {
          this.selected = [];
        } else {
          this.selected = this.invoices.slice();
        }
      },

      back() {
        this.$router.go(-1);
      }
    }
  }
</script>
