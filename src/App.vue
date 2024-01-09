<template>
  <h1>Vuex</h1>
  <product-list-one></product-list-one>
  <product-list-two></product-list-two>

  <h1>End VueX</h1>
</template>
<script>
import ProductListOne from '@/components/ProductListOne.vue';
import ProductListTwo from '@/components/ProductListTwo.vue';
export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
}
</script>
<style>

</style>