<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
                         :mini-variant.sync="mini"
                         clipped
                         stateless
                         app>
      <v-list value="true"
              v-for="main in main_menu"
              :key="main.title">
        <v-list-group :prepend-icon="main.icon">
          <v-list-tile slot="activator">
            <!--<v-list-tile-action @click="">-->
            <!--</v-list-tile-action>-->
            <v-list-tile-content>
              <v-list-tile-title>{{ main.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile sub-group
                       v-for="sub in sub_menu"
                       :key="sub.title"
                       @click="">
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
  export default {
    data() {
      return {
        drawer: true,
        mini: false,
        main_menu: [{
          icon: 'list',
          title: 'leistungen'
        }, {
          icon: 'people',
          title: 'zahnärzte'
        }, {
          icon: 'create',
          title: 'rechnungen'
        }, {
          icon: 'timeline',
          title: 'auswertungen'
        }, {
          icon: 'language',
          title: 'sonstiges'
        }],
        sub_menu: [{
          icon: 'add',
          title: 'anlegen'
        }, {
          icon: 'update',
          title: 'ändern'
        }, {
          icon: 'delete',
          title: 'löschen'
        }],
        title: 'dentoice'
      }
    },
    name: 'App'
  }
</script>
