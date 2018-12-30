<template>
  <v-app>
    <v-navigation-drawer permanent
                         mini-variant
                         clipped
                         stateless
                         hide-overlay
                         dark
                         app
    >
      <v-toolbar clipped-left prominent>
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar>
              <img src="@/assets/dent.png">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list two-line>
        <v-list-tile v-for="item in menu"
                     v-model="item.active"
                     :key="item.title"
                     :prepend-icon="item.icon"
                     @click="navigate(item.route)"
        >
          <v-list-tile-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import router from './router'

  export default {
    data: () => ({
      name: 'App',
      menu: [
        {
          title: 'rechnungen',
          icon: 'euro_symbol',
          route: 'Invoices'
        },
        {
          title: 'material',
          icon: 'store',
          route: 'Materials'
        },
        {
          title: 'leistungen',
          icon: 'business_center',
          route: 'Efforts'
        },
        {
          title: 'zahnärzte',
          icon: 'group',
          route: 'Dentists'
        },
        {
          title: 'auswertungen',
          icon: 'bar_chart',
          route: 'Analytics'
        },
        {
          title: 'sonstiges',
          icon: 'all_inclusive',
          route: 'Misc'
        }
      ]
    }),
    methods: {
      navigate(page) {
        router.push({name: page});
      }
    }
  }
</script>
