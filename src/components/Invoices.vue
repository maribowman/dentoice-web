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
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="filterBy"
                        class="transparent"
          >
            <v-btn value="einzel" flat>
              <v-icon>photo</v-icon>
            </v-btn>
            <v-btn value="monat" flat>
              <v-icon>photo_library</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers"
                      :items="invoices"
                      :search="search"
                      :rows-per-page-items="[10]"
                      item-key="number"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.date}}</td>
              <td>{{props.item.number }}</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.type}}</td>
              <td>{{props.item.dentist}}</td>
              <td>{{props.item.sum}}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="green" @click="createPdf(props.item)">
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
      <v-speed-dial
        v-model="dial"
        bottom
        right
        fixed
        :transition="slide-y-reverse-transition"
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
        <!--<v-tooltip fixed left :value="true">-->
        <v-btn fab
               dark
               small
               @click="createSingle()"
        >
          <v-icon>photo</v-icon>
        </v-btn>
        <!--<span>rechnung</span>-->
        <!--</v-tooltip>-->
        <!--<v-tooltip disabled left :value="true">-->
        <v-btn fab
               dark
               small
               @click="createMonthly()"
        >
          <v-icon>photo_library</v-icon>
        </v-btn>
        <!--<span>monatsrechnung</span>-->
        <!--</v-tooltip>-->
      </v-speed-dial>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Invoices',


    methods: {
      createSingle() {
        router.push({name: "CreateInvoice"});
      },

      createMonthly() {
        router.push({name: "CreateMonthlyInvoice"});
      },

      createPdf(item) {
        // create pdf
      },

      edit(item) {
        // pass over item
        router.push({name: "CreateInvoice"});
      },

      remove(item) {
        // delete object
      }
    },


    data: () => ({
      headers: [
        {
          text: 'datum',
          value: 'date'
        },
        {
          text: 'nummer',
          value: 'number'
        },
        {
          text: 'patient',
          value: 'name'
        },
        {
          text: 'art',
          value: 'type'
        },
        {
          text: 'zahnarzt',
          value: 'dentist'
        },
        {
          text: 'betrag (€)',
          value: 'sum'
        }
      ],
      filterBy: null,
      search: '',
      dial: false,
      invoices: []
    })
  }
</script>
