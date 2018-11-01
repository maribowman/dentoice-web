<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
                         :mini-variant.sync="mini"
                         clipped
                         stateless
                         app
    >
      <v-list>
        <v-list-group v-for="item in mainMenu"
                      v-model="item.active"
                      :key="item.title"
                      :prepend-icon="item.icon"
                      no-action
        >

          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title @click="navigate('Dentists')">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile sub-group
                       v-for="sub in sub_menu"
                       :key="sub.title"
                       @click="navigate('CreateDentist')"
          >
            <v-list-tile-action>
              <v-icon>{{ sub.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ sub.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar clipped-left
               flat
               dark
               class="transparent"
               app>
      <v-list>
        <v-list-tile @click="mini = !mini">
          <v-list-tile>
            <v-icon>flash_on</v-icon>
          </v-list-tile>
          <v-list-tile-title>DENTOICE</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import router from './router'

  export default {
    data: () => ({
      name: 'App',
      title: 'dentoice',
      drawer: true,
      mini: false,
      mainMenu: [{
        title: 'leistungen',
        icon: 'list',
        route: 'leistungen'
      }, {
        title: 'zahnärzte',
        icon: 'people',
        route: 'Dentists'
      }, {
        title: 'rechnungen',
        icon: 'create',
        route: ''
      }, {
        title: 'auswertungen',
        icon: 'timeline',
        route: ''
      }, {
        title: 'sonstiges',
        icon: 'language',
        route: ''
      }],
      sub_menu: [{
        title: 'anlegen',
        icon: 'add'
      }, {
        title: 'ändern',
        icon: 'update'
      }, {
        title: 'löschen',
        icon: 'delete'
      }]
    }),
    methods: {
      navigate(page) {
        router.push({name: page});
      }
    }
  }
</script>
