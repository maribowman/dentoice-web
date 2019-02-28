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
                <v-slider v-model="mwst"
                          label="mwst in %"
                          min="0"
                          max="20"
                          thumb-label="always"
                ></v-slider>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="patient"
                              label="patient"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="color"
                              label="zahnfarbe"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="description"
                              label="art der arbeit"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="xml"
                              label="xml-nummer"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="insuranceType"
                               row
                               mandatory
                >
                  <v-radio label="kasse" value="KASSE"></v-radio>
                  <v-radio label="privat" value="PRIVAT"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="invoiceType"
                               row
                               mandatory
                >
                  <v-radio label="rechnung" value="INVOICE"></v-radio>
                  <v-radio label="kostenvoranschlag" value="ESTIMATE"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12>
                <v-menu v-model="datePicker"
                        :close-on-content-click="true"
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
                        <span class="headline">MATERIAL {{formTitle}}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout column>
                            <v-layout row>
                              <v-flex xs9>
                                <v-text-field v-model="editedItem.position" label="position"></v-text-field>
                              </v-flex>
                              <v-flex>
                                <v-btn @click="getMaterial(editedItem.position)">
                                  <v-icon>search</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                            <v-layout row>
                              <v-flex xs9>
                                <v-text-field v-model="editedItem.name" label="bezeichnung"></v-text-field>
                              </v-flex>
                              <v-flex>
                                <v-checkbox v-model="editedItem.isMetal" label="metall"></v-checkbox>
                              </v-flex>
                            </v-layout>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.notes" label="kommentar"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.quantity" label="menge"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.pricePerUnit" label="einzelpreis"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="close()">abbrechen</v-btn>
                        <v-btn color="orange" flat @click="saveMaterial()">speichern</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="materials"
                  item-key="position"
                  hide-actions
                  no-data-text="noch kein material spezifiziert"
                >
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                      <td>{{props.item.position}}</td>
                      <td>{{props.item.name}}</td>
                      <td>{{props.item.quantity}}</td>
                      <td>{{props.item.pricePerUnit}}</td>
                      <td>
                        <v-icon
                          small
                          color="blue"
                          @click="editMaterial(props.item)"
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
                        <span class="headline">LEISTUNG {{formTitle}}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout column>
                            <v-layout row>
                              <v-flex xs9>
                                <v-text-field v-model="editedItem.position" label="position"></v-text-field>
                              </v-flex>
                              <v-flex xs1>
                                <v-btn @click="getEffort(editedItem.position)">
                                  <v-icon>search</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.name" label="bezeichnung"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.quantity" label="menge"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.pricePerUnit" label="einzelpreis"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click.native="close()">abbrechen</v-btn>
                        <v-btn color="orange" flat @click.native="saveEffort()">speichern</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="efforts"
                  item-key="position"
                  hide-actions
                  no-data-text="noch keine leistungen spezifiziert"
                >
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected"
                        @click="props.selected = !props.selected">
                      <td>{{props.item.position}}</td>
                      <td>{{props.item.name}}</td>
                      <td>{{props.item.quantity}}</td>
                      <td>{{props.item.pricePerUnit}}</td>
                      <td>
                        <v-icon small
                                fap
                                color="blue"
                                @click="editEfforts(props.item)"
                        > edit
                        </v-icon>
                        <v-icon small
                                fap
                                color="red"
                                @click="deleteEffort(props.item)"
                        > delete
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
    name: 'CreateInvoice',

    data: () => ({
      dentists: [],
      dentist: null,
      mwst: 7,
      patient: null,
      color: null,
      description: null,
      xml: null,
      insuranceType: null,
      invoiceType: null,
      date: new Date().toISOString().substr(0, 10),
      datePicker: '',
      materialsDialog: false,
      effortsDialog: false,
      headers: [
        {
          text: "position",
          value: "position",
          sortable: false
        },
        {
          text: "bezeichnung",
          value: "name",
          sortable: false
        },
        {
          text: "menge",
          value: "quantity",
          sortable: false
        },
        {
          text: "einzelpreis",
          value: "pricePerUnit",
          sortable: false
        },
        {
          text: "action",
          value: "",
          sortable: false
        }
      ],
      materials: [],
      efforts: [],
      editedIndex: -1,
      editedItem: {
        position: '',
        name: '',
        quantity: '',
        pricePerUnit: ''
      },
      defaultItem: {
        position: '',
        name: '',
        quantity: '',
        pricePerUnit: ''
      }
    }),


    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'HINZUFÜGEN' : 'BEARBEITEN';
      }
    },


    watch: {
      materialsDialog(val) {
        val || this.close()
      },
      effortsDialog(val) {
        val || this.close()
      }
    },


    async created() {
      this.getDentists();
      if (this.$route.params.id) {
        this.loadInvoice(this.$route.params.id);
      }
    },


    methods: {
      getDentists() {
        axios
          .get('http://192.168.0.59:9876/v1/dentists')
          .then(response => (this.dentists = response.data))
          .catch(error => alert.log(error));
      },

      getMaterial(position) {
        axios
          .get(`http://192.168.0.59:9876/v1/materials/${position}`)
          .then(response => (this.editedItem = response.data))
          .catch(error => {
              if (error.response.status === 400) {
                alert(`ungültige eingabe \'${position}\'!`);
              } else if (error.response.status === 404) {
                alert(`material \'${position}\' konnte nicht gefunden werden!`);
              }
              alert.log(error);
            }
          );
      },

      getEffort(position) {
        axios
          .get(`http://192.168.0.59:9876/v1/efforts/${position}`)
          .then(response => (this.editedItem = response.data))
          .catch(error => {
              if (error.response.status === 400) {
                alert(`ungültige eingabe \'${position}\'!`);
              } else if (error.response.status === 404) {
                alert(`leistung \'${position}\' konnte nicht gefunden werden!`);
              }
              alert.log(error);
            }
          );
      },

      create() {
        axios.post('http://192.168.0.59:9876/v1/invoices/create',
          {
            headers: {
              'Content-Type': 'application/json',
            }
          },
          {
            data: {
              dentist: this.dentist.id,
              patient: this.patient,
              color: this.color,
              description: this.description,
              xmlNumber: this.xml,
              invoiceType: this.invoiceType,
              insuranceType: this.insuranceType,
              date: this.date,
              mwst: this.mwst,
              efforts: this.efforts,
              materials: this.materials
            }
          })
          .then(response => {
            console.log(response);
            if (response.status === 201) {
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
          .get(`http://192.168.0.59:9876/v1/invoices/${id}`)
          .then(response => {
              // const data = response.data;
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

      back() {
        this.$router.go(-1);
      },

      editMaterial(item) {
        this.editedIndex = this.materials.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.materialsDialog = true;
      },

      editEfforts(item) {
        this.editedIndex = this.efforts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.effortsDialog = true;
      },

      deleteMaterial(item) {
        const index = this.materials.indexOf(item);
        confirm(`material \'${item.position} - ${item.name}\' wirklich löschen?`) && this.materials.splice(index, 1);
      },

      deleteEffort(item) {
        const index = this.efforts.indexOf(item);
        confirm(`leistung \'${item.position} - ${item.name}\' wirklich löschen?`) && this.efforts.splice(index, 1);
      },

      close() {
        this.materialsDialog = false;
        this.effortsDialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300)
      },

      saveMaterial() {
        if (this.editedIndex > -1) {
          Object.assign(this.materials[this.editedIndex], this.editedItem);
        } else {
          this.materials.push(this.editedItem);
        }
        this.close();
      },

      saveEffort() {
        if (this.editedIndex > -1) {
          Object.assign(this.efforts[this.editedIndex], this.editedItem);
        } else {
          this.efforts.push(this.editedItem);
        }
        this.close();
      }
    }
  }
</script>
