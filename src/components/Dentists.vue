<template>
  <v-container fluid grid-list-md>
    <v-layout row>
      <v-data-iterator
        :items="dentists"
        content-tag="v-layout"
        hide-actions
        wrap
      >
        <v-flex slot="item"
                slot-scope="props"
                xs12
                sm6
        >
          <v-card>
            <v-card-title row justify-space-between>
              <div>
                <h1>{{props.item.firstName}} {{props.item.lastName}}</h1>
                <div>{{props.item.street}}</div>
                <div>{{props.item.city}}</div>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon @click="routeToUpdate(props.item)">
                <v-icon color="blue">create</v-icon>
              </v-btn>
              <v-btn icon @click="remove(props.item)">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider/>
            <v-list>
              <v-list-tile>
                <v-list-tile-content class="grey--text">telefon:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{props.item.phone}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content class="grey--text">fax:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{props.item.fax}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content class="grey--text">email:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{props.item.email}}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-layout>
    <v-flex>
      <v-btn color="green"
             fab
             dark
             fixed
             bottom
             right
             @click="routeToCreate()"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
  import router from '../router';
  import axios from 'axios';

  export default {
    name: 'Dentists',


    methods: {
      routeToCreate() {
        router.push({name: "CreateDentist"});
      },

      routeToUpdate(dentist) {
        router.push({name: "CreateDentist", params: {dentist: dentist}});
      },

      getAll() {
        axios
          .get('http://localhost:9876/v1/dentists')
          .then(response => (this.dentists = response.data))
          .catch(error => console.log(error));
      },

      remove(item) {
        confirm(item.firstName + ' ' + item.lastName + ' wirklich löschen?') &&
        axios
          .delete('http://localhost:9876/v1/dentists/' + item.id)
          .then(response => {
            if (response.status === 200) {
              this.getAll();
            } else {
              alert("something went wrong!")
            }
          })
          .catch(error => console.log(error));
      }
    },


    data: () => ({
      dentists: []
    }),


    mounted() {
      this.getAll();
    }
  }
</script>
