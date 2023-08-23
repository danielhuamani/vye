<template>
  <div class="container">
    <b-form @submit.prevent="saveProduct">
      <b-form-group
        id="input-group-1"
        label="Nombre"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Precio"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.price"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Fecha de registro"
        label-for="input-1"
      >
        <b-form-datepicker id="example-datepicker" v-model="form.create_at" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-button type="submit" variant="primary" class="mt-4">Guardar</b-button>
    </b-form>
  </div>
</template>
<script>
import { API } from 'aws-amplify'
export default {
  name: 'ProductCreateView',
  data () {
    return {
      form: {
        name: '',
        price: '',
        created_at: ''
      }
    }
  },
  methods: {
    saveProduct (e) {
      API.post('products', '/products', this.form).then(result => {
        console.log(result)
      })
    }
  }
}
</script>
