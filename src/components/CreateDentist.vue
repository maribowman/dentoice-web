<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">NEUER ZAHNARZT</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout coulmn wrap>
              <v-flex xs12 sm6>
                <v-text-field v-model="title" label="anrede" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="firstName" label="vorname" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="lastName" label="nachname" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="street" label="strasse" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="zip" label="postleitzahl" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="city" label="ort" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="phone" label="telefon"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="fax" label="fax"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="email" label="email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="cancel()">abbrechen</v-btn>
          <v-btn color="green" flat @click="save()">speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'CreateDentists',


    methods: {
      save() {
        if (!this.id) {
          this.create();
        } else {
          this.update();
        }
      },

      create() {
        axios.post('http://192.168.0.59:9876/dentists/create',
          {
            headers: {
              'Content-Type': 'application/json',
            }
          },
          {
            data: {
              title: this.title,
              firstName: this.firstName,
              lastName: this.lastName,
              street: this.street,
              zip: this.zip,
              city: this.city,
              phone: this.phone,
              fax: this.fax,
              email: this.email
            }
          })
          .then(response => {
            console.log(response);
            if (response.status === 201) {
              this.$router.push({name: "Dentists"});
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

      update() {
        axios.patch('http://192.168.0.59:9876/dentists/' + this.id,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          },
          {
            data: {
              title: this.title,
              firstName: this.firstName,
              lastName: this.lastName,
              street: this.street,
              zip: this.zip,
              city: this.city,
              phone: this.phone,
              fax: this.fax,
              email: this.email
            }
          })
          .then(response => {
            console.log(response);
            if (response.status === 200) {
              this.$router.push({name: "Dentists"});
            }
          })
          .catch(error => {
            var errorString = '';
            for (var i in error.response.data.errors) {
              errorString += ('\n -> ' + error.response.data.errors[i].field + ' - ' + error.response.data.errors[i].defaultMessage);
            }
            alert(error.response.data.status + ' ' + error.response.data.error + errorString)
          });
      },

      cancel() {
        this.$router.go(-1);
      }
    },


    props: ['dentist'],


    data: () => ({
      id: null,
      title: null,
      firstName: null,
      lastName: null,
      street: null,
      zip: null,
      city: null,
      phone: null,
      fax: null,
      email: null
    }),


    mounted() {
      if (this.dentist) {
        this.id = this.dentist.id;
        this.title = this.dentist.title;
        this.firstName = this.dentist.firstName;
        this.lastName = this.dentist.lastName;
        this.street = this.dentist.street;
        this.zip = this.dentist.zip;
        this.city = this.dentist.city;
        this.phone = this.dentist.phone;
        this.fax = this.dentist.fax;
        this.email = this.dentist.email;
      }
    }
  }
</script>
