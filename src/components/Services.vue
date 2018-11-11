<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
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
            <v-btn value="material" flat>
              <v-icon>store</v-icon>
            </v-btn>
            <v-btn value="service" flat>
              <v-icon>business_center</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers"
                      :items="filteredItems"
                      :search="search"
                      :rows-per-page-items="[10]"
                      item-key="id"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.number}}</td>
              <td>{{props.item.name }}</td>
              <td>{{props.item.price}}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="blue">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn flat color="red">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-data-table>
      </v-flex>
      <v-speed-dial
        v-model="fab"
        bottom
        right
        fixed
        :transition="slide-y-reverse-transition"
      >
        <v-btn slot="activator"
               v-model="fab"
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
               @click="createMaterial()"
        >
          <v-icon>store</v-icon>
        </v-btn>
        <v-btn fab
               dark
               small
               @click="createService()"
        >
          <v-icon>business_center</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Dentists',


    methods: {
      navigate(page) {
        router.push({name: page});
      },

      edit(item) {
        // pass over item
        router.push({name: "CreateDentist"});
      }
    },


    computed: {
      filteredItems() {
        return this.samples.filter((i) => {
          return !this.filterBy || (i.type === this.filterBy);
        })
      }
    },


    data: () => ({
      headers: [
        {
          text: "position",
          value: "number"
        },
        {
          text: "leistungsbezeichnung",
          value: "name"
        },
        {
          text: "einzelpreis",
          value: "price"
        }
      ],
      search: '',
      filterBy: 'material',
      fab: false,
      samples: [
        {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 11,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 12,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 13,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 14,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 21,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 22,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 23,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 24,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 31,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 32,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 33,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 34,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 41,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 42,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 43,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 44,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 51,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 52,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 53,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 54,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 61,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 62,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 63,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 64,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 71,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 72,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }
      ]
    })
  }
</script>
