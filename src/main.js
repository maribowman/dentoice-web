// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  transitions,
  VAlert,
  VApp,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VDataIterator,
  VDataTable,
  VDatePicker,
  VDialog,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VPagination,
  VRadioGroup,
  VSelect,
  VSpeedDial,
  VTextField,
  VToolbar,
  Vuetify
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VBtn,
    VBtnToggle,
    VCard,
    VCheckbox,
    VDataIterator,
    VDataTable,
    VDatePicker,
    VDialog,
    VDivider,
    VFooter,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VRadioGroup,
    VSelect,
    VSpeedDial,
    VTextField,
    VToolbar,
    VPagination,
    transitions
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
