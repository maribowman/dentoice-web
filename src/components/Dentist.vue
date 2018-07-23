<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field name="first_name"
                        placeholder="vorname"
                        readonly="true"
          >Klaus
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="last_name"
                        readonly="true"
          >Vohrer
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="street"
                        placeholder="strasse"
                        readonly="true"
          >Strasse 1
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="zip"
                        placeholder="postleitzahl"
                        readonly="true"
          >70567
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="city"
                        placeholder="ort"
                        readonly="true"
          >Tuebingen
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="phone"
                        placeholder="telefon"
                        readonly="true"
          >0123456789
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="fax"
                        placeholder="fax"
                        readonly="true"
          >0123456789
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field name="email"
                        placeholder="email"
                        readonly="true"
          >test@test.com
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
</script>
