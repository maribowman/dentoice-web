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
                <v-btn flat
                       color="blue"
                       @click="edit(props.item)"
                >
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn flat
                       color="red"
                       @click="remove(props.item)"
                >
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
               @click="createEffort()"
        >
          <v-icon>business_center</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-layout>


    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{formTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout column>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.number" label="position"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="bezeichnung"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.price" label="einzelpreis"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="close()">abbrechen</v-btn>
          <v-btn color="orange" flat @click.native="save()">hinzufügen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Services',


    methods: {
      createMaterial() {
        this.editedIndex = -1;
        this.editedItem.type = 'material';
        this.dialog = true;
      },

      createEffort() {
        this.editedIndex = -1;
        this.editedItem.type = 'service';
        this.dialog = true;
      },

      edit(item) {
        this.editedIndex = this.services.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      remove(item) {
        const index = this.services.indexOf(item);
        // TODO request to BE
        confirm('\'' + item.number + ' - ' + item.name + '\' wirklich löschen?') && this.services.splice(index, 1);
      },

      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.services[this.editedIndex], this.editedItem);
        } else {
          this.services.push(this.editedItem);
        }
        // TODO request to BE
        this.close();
      }
    },


    computed: {
      filteredItems() {
        return this.services.filter((i) => {
          return !this.filterBy || (i.type === this.filterBy);
        })
      },

      formTitle() {
        var type = this.editedItem.type === 'material' ? "MATERIAL" : "LEISTUNG";
        var action = this.editedIndex === -1 ? "HINZUFÜGEN" : "BEARBEITEN";
        return type + ' ' + action;
      }
    },


    watch: {
      dialog(val) {
        val || this.close()
      }
    }
    ,


    data: () => ({
      headers: [
        {
          text: "position",
          value: "number"
        },
        {
          text: "bezeichnung",
          value: "name"
        },
        {
          text: "einzelpreis",
          value: "price"
        }
      ],
      search: '',
      filterBy: '',
      services: [],
      fab: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        id: '',
        number: '',
        type: '',
        name: '',
        price: ''
      },
      defaultItem: {
        editedItem: {
          id: '',
          number: '',
          type: '',
          name: '',
          price: ''
        }
      }
    }),

    created() {
      this.services = [{
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
        }];
    }
  }
</script>
