<template>
  <v-container fluid grid-list-md>
    <v-text-field v-model="search"
                  append-icon="search"
                  label="suche"
                  solo
    ></v-text-field>
    <v-data-table :headers="headers"
                  :items="samples"
                  :search="search"
                  :rows-per-page-items="[10]"
                  item-key="number"
    >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{props.item.date}}</td>
          <td>{{props.item.number }}</td>
          <td>{{props.item.name}}</td>
          <td>{{props.item.type}}</td>
          <td>{{props.item.dentist}}</td>
          <td>{{props.item.sum}}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-action>
            <v-btn flat color="green">
              <v-icon>picture_as_pdf</v-icon>
            </v-btn>
            <v-btn flat color="blue">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn flat color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-action>
        </v-card>
      </template>
    </v-data-table>
    <v-flex>
      <v-btn color="green"
             big
             fab
             dark
             fixed
             bottom
             right
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
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
      headers: [
        {
          text: 'datum',
          value: 'date'
        },
        {
          text: 'nummer',
          value: 'number'
        },
        {
          text: 'patient',
          value: 'name'
        },
        {
          text: 'art',
          value: 'type'
        },
        {
          text: 'zahnarzt',
          value: 'dentist'
        },
        {
          text: 'betrag ($)',
          value: 'sum'
        }
      ],
      search: '',
      samples: [
        {
          date: '02.06.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.05.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.05.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '6',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '7',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '8',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '9',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '10',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '11',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '12',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '13',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '14',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '15',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '16',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '17',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '18',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '19',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '20',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '21',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '22',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '23',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '24',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '25',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '26',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '27',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '28',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '29',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '30',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '31',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '32',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '33',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '34',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '35',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }, {
          date: '02.11.2018',
          number: '1',
          name: 'amanda fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        },
        {
          date: '02.11.2018',
          number: '2',
          name: 'katrin fraser',
          type: 'kasse',
          dentist: 'bluetooth',
          sum: '234'
        }, {
          date: '01.11.2018',
          number: '3',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'bluetooth',
          sum: '123'
        }, {
          date: '02.11.2018',
          number: '4',
          name: 'diego fraser',
          type: 'kasse',
          dentist: 'dontomed',
          sum: '321'
        }, {
          date: '01.11.2018',
          number: '5',
          name: 'mat fraser',
          type: 'privat',
          dentist: 'dontomed',
          sum: '31'
        }
      ]
    })
  }
</script>
