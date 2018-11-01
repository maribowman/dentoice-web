<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items=samples
      :rows-per-page-items=[10]
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex slot="item"
              slot-scope="props"
              xs12
              sm6
              md4
              lg3
      >
        <v-card>
          <v-card-title>
            <div>
              <h1>{{props.item.name}}</h1>
              <div>{{ props.item.street}}</div>
              <div>{{ props.item.city}}</div>
            </div>
          </v-card-title>
          <v-divider/>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>telefon:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.phone}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>fax:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.fax}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>email:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.email}}</v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-btn icon
                   @click="alter(item)"
            >
              <v-icon>create</v-icon>
            </v-btn>
            <v-btn icon
                   @click="alter(item)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Dentists',
    methods: {
      navigate(page) {
        router.push({name: page});
      },
      alter(item) {
        // pass over item
        router.push({name: "CreateDentist"});
      }
    },
    data: () => ({
      samples: [
        {
          id: 1,
          name: "mat fraser",
          street: "rich froning way 1",
          city: "123456 cookville",
          phone: "+123456789",
          fax: "+123456789",
          email: "mat.fraser@test.com",
        },
        {
          id: 2,
          name: "katrin davidsdottir",
          street: "sled dog ave 1",
          city: "123456 iceland",
          phone: "+123456789",
          fax: "+123456789",
          email: "katrin.davidsdottir@test.com"
        },
        {
          id: 3,
          name: "kara webb",
          street: "crossfit kova street",
          city: "123456 brisbane",
          phone: "+123456789",
          fax: "+123456789",
          email: "kara.webb@test.com"
        }, {
          id: 1,
          name: "mat fraser",
          street: "rich froning way 1",
          city: "123456 cookville",
          phone: "+123456789",
          fax: "+123456789",
          email: "mat.fraser@test.com",
        },
        {
          id: 2,
          name: "katrin davidsdottir",
          street: "sled dog ave 1",
          city: "123456 iceland",
          phone: "+123456789",
          fax: "+123456789",
          email: "katrin.davidsdottir@test.com"
        },
        {
          id: 3,
          name: "kara webb",
          street: "crossfit kova street",
          city: "123456 brisbane",
          phone: "+123456789",
          fax: "+123456789",
          email: "kara.webb@test.com"
        }
      ]
    })
  }
</script>
