<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <quote>HAHAHA I BIMS 1 GERHARD!</quote>
        <v-btn icon @click="()=>{this.$router.push({name:'Invoices'});}">
          <img src="@/assets/gerhard.jpg" contain height="800">
        </v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
