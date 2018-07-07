<template>
  <div>
    <v-card>
      <v-container>
        <v-form color="red">
          <v-text-field v-model="product.name" label="Name"></v-text-field>
          <v-text-field v-model="product.price" label="Price" type="number" pattern="\d*"></v-text-field>
          <v-btn block color="error" @click="remove"><v-icon>clear</v-icon></v-btn>
        </v-form>
      </v-container>
    </v-card>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product', 'index'],
  methods: {
    remove: function () {
      this.$emit('remove-product', this.index)
    }
  }
}
</script>
