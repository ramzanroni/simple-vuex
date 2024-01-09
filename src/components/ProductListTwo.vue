<template>
    <p>Hello From Two</p>
  <ul>
    <li v-for="product in products">
      <span>Name: {{product.name}}</span>
      <span>Price: {{product.price}}</span>
    </li>
  </ul>
</template>
  <script>
 
  export default {
    name: 'ProductListTwo',
    components: {
    },
    computed: {
      products(){
        return this.$store.state.products;
      },
      saleProducts(){
        return this.$store.getters.saleProducts;
      }
    },
    methods: {
  
    },
    watch: {
  
    }
  }
  </script>
  <style>
  
  </style>