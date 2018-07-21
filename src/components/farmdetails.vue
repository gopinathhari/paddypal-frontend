<template>
  <v-app id="inspire">
    <div  class="circular" style="height:700px; wigth:600px;" >
      <v-content>
        <v-container fluid fill-height >
          <v-layout align-center justify-center >
            <v-flex xs12 sm8 >
              <v-card class="elevation-12" >
                <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"


  >
    <template slot="items" slot-scope="props" >
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          }
        ]
      }
    }
  }
</script>
