<template>
  <v-container fluid grid-list-md>
    <v-layout column>
      <v-flex xs12>
        <v-toolbar>
          <v-flex xs10>
            <v-text-field v-model="search"
                          append-icon="search"
                          label="suche"
                          single-line
                          clearable
            ></v-text-field>
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
              <td>{{props.item.dentist.firstName + ' ' + props.item.dentist.lastName}}</td>
              <td>{{props.item.brutto}}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="green" @click="getSinglePdf(props.item)">
                  <v-icon>picture_as_pdf</v-icon>
                </v-btn>
                <v-btn flat color="blue" @click="editSingle(props.item)">
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
      <v-speed-dial
        v-model="dial"
        bottom
        right
        fixed
        transition="slide-y-reverse-transition"
      >
        <v-btn slot="activator"
               v-model="dial"
               color="green"
               fab
               dark
        >
          <v-icon>add</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn fab
               dark
               small
               @click="createSingle()"
        >
          <v-icon>photo</v-icon>
        </v-btn>
        <v-btn fab
               dark
               small
               @click="createMonthly()"
        >
          <v-icon>photo_library</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'
  import axios from 'axios';

  export default {
    name: 'Invoices',


    methods: {
      getAll() {
        axios
          .get('http://localhost:9876/v1/invoices?page=0&size=10')
          .then(response => (this.invoices = response.data._embedded.invoiceEntityList))
          .catch(error => alert.log(error));
      },

      createSingle() {
        router.push({name: "CreateInvoice"});
      },

      editSingle(item) {
        confirm(invoice.dentist.firstName.toString());
        router.push({name: "CreateInvoice", params: {invoice: invoice}});
      },

      createMonthly() {
        router.push({name: "CreateMonthlyInvoice"});
      },

      getSinglePdf(item) {
        axios({
          url: `http://localhost:9876/v1/invoices/${item.id}/pdf`,
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

      getXml(item) {
        axios({
          url: `http://localhost:9876/v1/invoices/${item.id}/xml`,
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

      remove(item) {
        confirm(`rechnung ${item.id} wirklich löschen?`) &&
        axios
          .delete(`http://localhost:9876/v1/invoices/${item.id}`)
          .then(response => {
            if (response.status === 204) {
              this.getAll();
            } else {
              alert(`could not delete ${item.id}.something went wrong!`)
            }
          })
          .catch(error => alert.log(error));
      }
    }
    ,


    created() {
      this.getAll();
    }
    ,


    data: () => ({
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
          text: 'zahnarzt',
          value: 'dentist'
        },
        {
          text: 'betrag (€)',
          value: 'brutto'
        }
      ],
      filterBy: null,
      search: '',
      dial: false,
      invoices: []
    })
  }
</script>
