<template>
    <p>Hello From One</p>
  <ul>
    <li v-for="product in saleProducts">
      <span>Name: {{product.name}}</span>
      <span>Price: {{product.price}}</span>
    </li>
  </ul>
  <button @click="reducedPrice(4)">Reduced Price</button>
</template>
  <script>
 import {mapGetters} from "vuex";
import {mapActions} from "vuex";

 export default {
    name: 'ProductListOne',
    components: {
    },
    computed: {
      products(){
        return this.$store.state.products;
      },
      ...mapGetters([
          'saleProducts'
      ]),
      // saleProducts(){
      //   return this.$store.getters.saleProducts;
      // }
    },
    methods: {
      ...mapActions(['reducedPrice']),
      // reducedPrice(amount){
      //   this.$store.dispatch('reducedPrice', amount);
      // }
    },
    watch: {

    }
  }
  </script>
  <style>
  
  </style>