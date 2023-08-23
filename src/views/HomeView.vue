<template>
  <div class="container">
    <div class="mt-4">
      <b-button href="/dashboard/create">Agregar</b-button>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>
import { API } from 'aws-amplify'
export default {
  created () {
    API.get('itemsapi', '/items').then(result => {
      console.log(result)
    })
  },
  data () {
    return {
      items: [
        { id: 40, name: 'Dickerson', price: 'Macdonald', created_at: '' },
        { id: 21, name: 'Larsen', price: 'Shaw', created_at: '' },
        { id: 89, name: 'Geneva', price: 'Wilson', created_at: '' },
        { id: 38, name: 'Jami', price: 'Carney', created_at: '' }
      ]
    }
  }
}
</script>
