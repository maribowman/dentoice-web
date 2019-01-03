<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <v-toolbar>
          <v-text-field v-model="search"
                        append-icon="search"
                        label="suche"
                        single-line
                        clearable
          ></v-text-field>
        </v-toolbar>
      </v-flex>
      <v-flex xs12>
        <v-data-table :headers="headers"
                      :items="materials"
                      :search="search"
                      :rows-per-page-items="[10]"
                      item-key="position"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.position}}</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.pricePerUnit}}</td>
              <td>
                <v-checkbox
                  :input-value="props.item.isMetal"
                  primary
                  hide-details
                  readonly
                ></v-checkbox>
              </td>
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

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{formTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout column>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.position" label="position"
                              :disabled="disablePositionText"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="bezeichnung"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.pricePerUnit" label="einzelpreis"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-checkbox v-model="editedItem.isMetal" label="metall"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="close()">abbrechen</v-btn>
          <v-btn color="orange" flat @click.native="save()">speichern</v-btn>
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
      create() {
        this.editedIndex = -1;
        this.dialog = true;
      },

      edit(item) {
        this.disablePositionText = true;
        this.editedIndex = this.materials.indexOf(item);
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
                  name: this.editedItem.name,
                  pricePerUnit: this.editedItem.pricePerUnit,
                  isMetal: this.editedItem.isMetal
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
                  name: this.editedItem.name,
                  pricePerUnit: this.editedItem.pricePerUnit,
                  isMetal: this.editedItem.isMetal
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
          .then(response => (this.materials = response.data))
          .catch(error => console.log(error));
      },

      remove(item) {
        confirm('\'' + item.position + ' - ' + item.name + '\' wirklich löschen?') &&
        axios
          .delete('http://localhost:9876/v1/materials/' + item.position)
          .then(response => {
            if (response.status === 204) {
              this.getAll();
            }
          })
          .catch(error => {
            alert(error.response.data.status + ' ' + error.response.data.error + '\n' + error.response.data.message)
          });
      }
    },


    computed: {
      formTitle() {
        const action = this.editedIndex === -1 ? "HINZUFÜGEN" : "BEARBEITEN";
        return "MATERIAL " + action;
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
        },
        {
          text: "metall",
          value: "isMetal"
        }
      ],
      search: '',
      materials: [],
      dialog: false,
      disablePositionText: false,
      editedIndex: -1,
      editedItem: {
        position: null,
        name: null,
        pricePerUnit: null,
        isMetal: false
      },
      defaultItem: {
        position: null,
        name: null,
        pricePerUnit: null,
        isMetal: false
      }
    }),


    mounted() {
      this.getAll();
    }
  }
</script>
