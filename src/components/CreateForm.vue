<template>
  <v-container fluid>
    <v-layout column
              align-center>
      <v-select v-model="select"
                :items="title"
                label="titel"
                required
      ></v-select>
      <v-text-field name="first_name"
                    label="vorname"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="last_name"
                    label="nachname"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="street"
                    label="strasse"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="zip"
                    label="postleitzahl"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="city"
                    label="ort"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="phone"
                    label="telefon"
                    clearable
                    required
      ></v-text-field>
      <v-text-field name="fax"
                    label="fax"
                    clearable
      ></v-text-field>
      <v-text-field name="email"
                    label="email"
                    clearable
                    required
      ></v-text-field>
      <v-btn>anlegen</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      title: ['herr', 'frau']
    })
  }
</script>
