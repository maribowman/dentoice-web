<template>
  <v-container fluid grid-list-md>
    <v-layout column>
      <v-flex xs12>
        <v-toolbar>
          <v-flex xs12 sm4>
            <v-text-field v-model="search"
                          append-icon="search"
                          label="suche"
                          single-line
                          clearable
            ></v-text-field>
          </v-flex>
          <v-divider></v-divider>
          <v-flex xs12 sm4>
            <v-select v-model="dentist"
                      :items="dentists"
                      :item-text="item => item.firstName + ' ' + item.lastName"
                      label="zahnarzt"
                      required
                      return-object
                      single-line
                      clearable
            ></v-select>
          </v-flex>
          <v-flex xs12 sm2>
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
          <v-flex xs12 sm2>
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
        </v-toolbar>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers"
                      :items="invoices"
                      :search="search"
                      :rows-per-page-items="[10]"
                      item-key="id"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.date}}</td>
              <td>{{props.item.id }}</td>
              <td>{{props.item.patient}}</td>
              <td>{{props.item.dentist.firstName + ' ' + props.item.dentist.lastName}}</td>
              <td>{{props.item.brutto}}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="green" @click="processXml(props.item)">
                  <v-icon>code</v-icon>
                </v-btn>
                <v-btn flat color="green" @click="getPdf(props.item)">
                  <v-icon>picture_as_pdf</v-icon>
                </v-btn>
                <v-btn flat color="blue" @click="edit(props.item)">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn flat color="red" @click="remove(props.item)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex>
        <v-btn color="green"
               fab
               dark
               fixed
               bottom
               right
               @click="create()"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Invoices',


    methods: {
      getAll() {
        let url = `http://localhost:9876/invoices/from/${this.fromDate}/to/${this.toDate}`;
        if (this.dentist) {
          url += `?dentist=${this.dentist.id}`;
        }
        axios
          .get(url)
          .then(response => (this.invoices = response.data))
          .catch(error => alert.log(error));
      },

      create() {
        this.$router.push({name: "CreateInvoice"});
      },

      edit(invoice) {
        this.$router.push({name: "EditInvoice", params: {id: invoice.id}});
      },

      getPdf(item) {
        axios({
          url: `http://localhost:9876/invoices/${item.id}/pdf`,
          method: 'GET',
          responseType: 'blob'
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${item.id}.pdf`);
          document.body.appendChild(link);
          link.click();
        });
      },

      processXml(item) {
        this.getXml(item);
        this.sendXml(item);
      },


      getXml(item) {
        axios({
          url: `http://localhost:9876/invoices/${item.id}/xml`,
          method: 'GET',
          responseType: 'blob'
        })
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${item.xmlNumber}.xml`);
            document.body.appendChild(link);
            link.click();
          });
      },

      sendXml(item) {
        axios({
          url: `http://localhost:9876/mail/${item.id}/xml`,
          method: 'GET',
        })
          .then(response => {
            if (response.status !== 200) {
              alert(`something went wrong! could not send email for invoice ${item.id}. `)
            }
          })
          .catch(error => alert.log(error));
      },

      remove(item) {
        confirm(`rechnung ${item.id} wirklich löschen?`) &&
        axios
          .delete(`http://localhost:9876/invoices/${item.id}`)
          .then(response => {
            if (response.status === 204) {
              this.getAll();
            } else {
              alert(`could not delete ${item.id}. something went wrong!`)
            }
          })
          .catch(error => alert.log(error));
      },

      getDentists() {
        axios
          .get('http://localhost:9876/dentists')
          .then(response => (this.dentists = response.data))
          .catch(error => alert.log(error));
      }
    }
    ,

    mounted() {
      this.getDentists();
      this.getAll();
    },


    watch: {
      dentist: function () {
        this.getAll()
      },
      fromPicker: function () {
        this.getAll()
      },
      toPicker: function () {
        this.getAll()
      }
    },


    data: () => ({
      search: '',
      dentists: [],
      dentist: null,
      fromDate: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString().substr(0, 10),
      fromPicker: '',
      toDate: new Date().toISOString().substr(0, 10),
      toPicker: '',
      invoices: [],
      headers: [
        {
          text: 'datum',
          value: 'date'
        },
        {
          text: 'nummer',
          value: 'id'
        },
        {
          text: 'patient',
          value: 'patient'
        },
        {
          text: 'zahnarzt',
          value: 'dentist'
        },
        {
          text: 'betrag (€)',
          value: 'brutto'
        }
      ]
    })
  }
</script>
