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
        </v-toolbar>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers"
                      :items="estimates"
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
                <v-btn flat color="green" @click="getXml(props.item)">
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
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Invoices',


    methods: {
      getAll() {
        let url = `http://localhost:9876/invoices/estimates`;
        if (this.dentist) {
          url += `?dentist=${this.dentist.id}`;
        }
        axios
          .get(url)
          .then(response => (this.estimates = response.data))
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
      }
    },


    data: () => ({
      search: '',
      dentists: [],
      dentist: null,
      estimates: [],
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
