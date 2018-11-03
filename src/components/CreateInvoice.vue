<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">NEUE RECHNUNG</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="patient" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Fraser','Vohrer', 'Ademi']"
                  label="zahnarzt"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="type"
                               row
                               mandatory
                >
                  <v-radio label="kasse" value="radio-1"></v-radio>
                  <v-radio label="privat" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="kind"
                               row
                               mandatory
                >
                  <v-radio label="rechnung" value="radio-1"></v-radio>
                  <v-radio label="kv" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12>
                <v-menu :close-on-content-click="true"
                        v-model="datePicker"
                        :nudge-right="40"
                        lazy
                        reactive
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                  <v-text-field slot="activator"
                                v-model="date"
                                prepend-icon="event"
                                readonly
                  ></v-text-field>
                  <v-date-picker v-model="date"
                                 @click="datePicker = false"
                                 first-day-of-week="1"
                                 locale="de-de"
                  ></v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs12>
                <v-toolbar flat color="white">
                  <v-toolbar-title>material</v-toolbar-title>
                  <v-spacer></v-spacer>


                  <v-dialog v-model="materialsDialog" max-width="500px">
                    <v-btn slot="activator"
                           color="orange"
                           dark
                           icon
                    >
                      <v-icon>add</v-icon>
                    </v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">MATERIAL HINZUFUEGEN</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <!--<v-flex xs12 sm6 md4>-->
                            <!--<v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12 sm6 md4>-->
                            <!--<v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12 sm6 md4>-->
                            <!--<v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12 sm6 md4>-->
                            <!--<v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12 sm6 md4>-->
                            <!--<v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>-->
                            <!--</v-flex>-->
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click.native="close">abbrechen</v-btn>
                        <v-btn color="orange" flat @click.native="save">hinzufuegen</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="materials"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                      <td>{{props.item.position}}</td>
                      <td>{{props.item.name}}</td>
                      <td>{{props.item.quantity}}</td>
                      <td>{{props.item.price}}</td>
                      <td>
                        <v-checkbox class="text-xs-center"
                                    :input-value="props.selected"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-icon
                          small
                          color="blue"
                          @click="editItem(props.item)"
                        >
                          edit
                        </v-icon>
                        <v-icon
                          small
                          color="red"
                          @click="deleteMaterial(props.item)"
                        >
                          delete
                        </v-icon>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-flex>


              <v-flex xs12>
                <v-toolbar flat color="white">
                  <v-toolbar-title>leistung</v-toolbar-title>
                  <v-spacer></v-spacer>


                  <v-dialog v-model="effortsDialog" max-width="500px">
                    <v-btn slot="activator"
                           color="orange"
                           dark
                           icon
                    >
                      <v-icon>add</v-icon>
                    </v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">NEUE LEISTUNG</span>
                      </v-card-title>
                      <!--<v-card-text>-->
                      <!--<v-container grid-list-md>-->
                      <!--<v-layout wrap>-->
                      <!--<v-flex xs12 sm6 md4>-->
                      <!--<v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>-->
                      <!--</v-flex>-->
                      <!--<v-flex xs12 sm6 md4>-->
                      <!--<v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>-->
                      <!--</v-flex>-->
                      <!--<v-flex xs12 sm6 md4>-->
                      <!--<v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>-->
                      <!--</v-flex>-->
                      <!--<v-flex xs12 sm6 md4>-->
                      <!--<v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>-->
                      <!--</v-flex>-->
                      <!--<v-flex xs12 sm6 md4>-->
                      <!--<v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>-->
                      <!--</v-flex>-->
                      <!--</v-layout>-->
                      <!--</v-container>-->
                      <!--</v-card-text>-->

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="efforts"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                      <td>{{props.item.position}}</td>
                      <td>{{props.item.name}}</td>
                      <td>{{props.item.quantity}}</td>
                      <td>{{props.item.price}}</td>
                      <td>
                        <v-checkbox
                          :input-value="props.selected"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-icon
                          small
                          fap
                          color="blue"
                          @click="editItem(props.item)"
                        >
                          edit
                        </v-icon>
                        <v-icon
                          small
                          fap
                          color="red"
                          @click="deleteEffort(props.item)"
                        >
                          delete
                        </v-icon>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-flex>


            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="create()">abbrechen</v-btn>
          <v-btn color="green" flat @click="create()">speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'CreateInvoice',
    type: '',
    kind: '',

    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      datePicker: '',
      materialsDialog: false,
      effortsDialog: false,
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
          text: "menge",
          value: "quantity"
        },
        {
          text: "einzelpreis",
          value: "price"
        },
        {
          text: "privat",
          value: "type"
        }
        ,
        {
          text: "",
          value: ""
        }
      ],
      materials: [],
      selected: [],
      efforts: [],


      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }

    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    created() {
      this.initialize()
    },

    methods: {
      create() {
        // make post call to backend
        router.push({name: "Invoices"});
      },

      back() {
        router.go(-1);
      },

      initialize() {
        this.materials = [
          {
            position: "12345",
            name: "test 1",
            quantity: "1.0",
            price: "1.00",
            type: false
          }, {
            position: "23546",
            name: "sample 2",
            quantity: "5.2",
            price: "1.11",
            type: false
          }
        ]
      },

      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      deleteMaterial(item) {
        const index = this.materials.indexOf(item);
        confirm('material \'' + item.position + ' - ' + item.name + '\' wirklich loeschen?') && this.materials.splice(index, 1);
      },

      deleteEffort(item) {
        const index = this.efforts.indexOf(item);
        confirm('leistung \'' + item.position + ' - ' + item.name + '\' wirklich loeschen?') && this.efforts.splice(index, 1);
      },

      close() {
        this.materialsDialog = false;
        this.effortsDialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300)
      },

      save() {
        // TODO remove
        this.close();


        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
        this.close();
      }
    }
  }
</script>
