<template>
  <v-app>
    <v-navigation-drawer app
                         class="orange lighten-4"
                         permanent
                         width="225"
    >
      <v-layout class="fill-height"
                tag="v-list"
                column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
          ><img src="@/assets/dent.png">
          </v-list-tile-avatar>
          <v-list-tile-title class="title">DENTOICE</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile v-for="item in menu"
                     :key="item.title"
                     avatar
                     class="v-list-item"
                     :to="item.route"
                     @click="validateSession(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title"/>
        </v-list-tile>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      credentials: {
        username: "test",
        password: "test"
      },
      menu: [
        {
          title: 'rechnungen',
          icon: 'layers',
          route: '/invoices'
        },
        {
          title: 'kostenvoranschläge',
          icon: 'layers_clear',
          route: '/estimates'
        },
        {
          title: 'monatsrechnungen',
          icon: 'euro_symbol',
          route: '/monthlies'
        },
        {
          title: 'material',
          icon: 'build',
          route: '/materials'
        },
        {
          title: 'leistungen',
          icon: 'business_center',
          route: '/efforts'
        },
        {
          title: 'zahnärzte',
          icon: 'group',
          route: '/dentists'
        },
        {
          title: 'logout',
          icon: 'exit_to_app',
          route: '/login'
        }
      ]
    }),


    methods: {
      validateSession(page) {
        if (page === 'logout') {
          this.$emit("authenticated", false);
        }
      }
    }
  }
</script>
