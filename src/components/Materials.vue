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
                      item-key="position"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.position}}</td>
              <td>{{props.item.name }}</td>
              <td>{{props.item.pricePerUnit}}</td>
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
                <v-text-field v-model="editedItem.position"
                              label="position"
                              :disabled="disablePositionText"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name"
                              label="bezeichnung"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.pricePerUnit"
                              label="einzelpreis"></v-text-field>
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
  import axios from 'axios';

  export default {
    name: 'Materials',


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
        this.disablePositionText = true;
        this.editedIndex = this.services.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },


      close() {
        this.disablePositionText = false;
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          axios
            .patch('http://localhost:9876/v1/materials/' + this.editedItem.position,
              {
                headers: {
                  'Content-Type': 'application/json',
                }
              },
              {
                data: {
                  position: this.editedItem.position,
                  type: this.editedItem.type,
                  name: this.editedItem.name,
                  pricePerUnit: this.editedItem.pricePerUnit
                }
              })
            .then(response => {
              console.log(response);
              if (response.status === 200) {
                alert('material \'' + this.editedItem.position + ' - ' + this.editedItem.name + '\' erfolgreich editiert!');
                this.getAll();
              }
            })
            .catch(error => {
              const status = error.response.status;
              if (status === 500 || status === 400) {
                alert(error.response.data.status + ' ' + error.response.data.error + '\n' + error.response.data.message);
              } else {
                var errorString = '';
                for (var i in error.response.data.errors) {
                  errorString += ('\n -> ' + error.response.data.errors[i].field + ' - ' + error.response.data.errors[i].defaultMessage);
                }
                alert(error.response.data.status + ' ' + error.response.data.error + errorString)
              }
            });
        } else {
          axios
            .post('http://localhost:9876/v1/materials/create',
              {
                headers: {
                  'Content-Type': 'application/json',
                }
              },
              {
                data: {
                  position: this.editedItem.position,
                  type: this.editedItem.type,
                  name: this.editedItem.name,
                  pricePerUnit: this.editedItem.pricePerUnit
                }
              })
            .then(response => {
              console.log(response);
              if (response.status === 201) {
                alert('material \'' + this.editedItem.position + ' - ' + this.editedItem.name + '\' erfolgreich gespeichert!');
                this.getAll();
              }
            })
            .catch(error => {
              const status = error.response.status;
              if (status === 500 || status === 400) {
                alert(error.response.data.status + ' ' + error.response.data.error + '\n' + error.response.data.message);
              } else {
                var errorString = '';
                for (var i in error.response.data.errors) {
                  errorString += ('\n -> ' + error.response.data.errors[i].field + ' - ' + error.response.data.errors[i].defaultMessage);
                }
                alert(error.response.data.status + ' ' + error.response.data.error + errorString)
              }
            });
        }

        this.close();
      },

      getAll() {
        axios
          .get('http://localhost:9876/v1/materials')
          .then(response => (this.services = response.data))
          .catch(error => console.log(error));
      },

      remove(item) {
        confirm('\'' + item.position + ' - ' + item.name + '\' wirklich löschen?') &&
        axios
          .delete('http://localhost:9876/v1/materials/' + item.position)
          .then(response => {
            if (response.status === 200) {
              this.getAll();
            }
          })
          .catch(error => {
            alert(error.response.data.status + ' ' + error.response.data.error + '\n' + error.response.data.message)
          });
      }
    },


    computed: {
      filteredItems() {
        return this.services.filter((i) => {
          return !this.filterBy || (i.type === this.filterBy);
        })
      },

      formTitle() {
        const type = this.editedItem.type === 'material' ? "MATERIAL" : "LEISTUNG";
        const action = this.editedIndex === -1 ? "HINZUFÜGEN" : "BEARBEITEN";
        return type + ' ' + action;
      }
    },


    watch: {
      dialog(val) {
        val || this.close()
      }
    },


    data: () => ({
      headers: [
        {
          text: "position",
          value: "position"
        },
        {
          text: "bezeichnung",
          value: "name"
        },
        {
          text: "einzelpreis",
          value: "pricePerUnit"
        }
      ],
      search: '',
      filterBy: '',
      services: [],
      dial: false,
      dialog: false,
      disablePositionText: false,
      editedIndex: -1,
      editedItem: {
        position: null,
        type: null,
        name: null,
        pricePerUnit: null
      },
      defaultItem: {
        editedItem: {
          position: null,
          type: null,
          name: null,
          pricePerUnit: null
        }
      }
    }),


    mounted() {
      this.getAll();
    }
  }
</script>
