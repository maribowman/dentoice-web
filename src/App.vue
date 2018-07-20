<template>
  <v-app>
    <v-navigation-drawer :mini-variant.sync="mini"
                         :clipped="clipped"
                         enable-resize-watcher
                         fixed
                         permanent="true"
                         value="true"
                         app>
      <v-list value="true"
              v-for="(main, m) in main_menu"
              :key="m">
        <v-list-group :prepend-icon="main.icon">
          <v-list-tile slot="activator">
            <v-list-tile-title v-text="main.title"></v-list-tile-title>
          </v-list-tile>
          <v-list-tile sub-group
                       value="true"
                       v-for="(sub, s) in sub_menu"
                       :key="s"
                       @click="">
            <v-list-tile-action>
              <v-icon v-html="sub.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="sub.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
        clipped: true,
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
