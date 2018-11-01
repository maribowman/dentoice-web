<template>
  <v-data-table
    :headers="headers"
    :items="filteredItems"
    :rows-per-page-items="[10]"
    :filter="filterBy"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{props.item.number}}</td>
      <td>{{props.item.name }}</td>
      <td>{{props.item.price}}</td>
      <td>{{props.item.type}}</td>
    </template>
  </v-data-table>
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
    computed: {
      filteredItems() {
        return this.samples.filter((i) => {
          return !this.filterBy || (i.type === this.filterBy);
        })
      }
    },
    data: () => ({
      headers: [
        {
          text: 'position',
          value: 'number'
        },
        {
          text: 'leistungsbezeichnung',
          value: 'name'
        },
        {
          text: 'einzelpreis',
          value: 'price'
        },
        {
          text: 'type',
          value: 'price'
        }
      ],
      filterBy: "service",
      samples: [
        {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }, {
          id: 1,
          number: "S987",
          type: "service",
          name: "mat fraser",
          price: "10 euro"
        },
        {
          id: 2,
          number: "M123",
          type: "material",
          name: "mat fraser",
          price: "10 euro"
        }, {
          id: 3,
          number: "S987",
          type: "material",
          name: "kathrin d",
          price: "10 euro"
        },
        {
          id: 4,
          number: "M123",
          type: "service",
          name: "kathrin d",
          price: "10 euro"
        }
      ]
    })
  }
</script>
