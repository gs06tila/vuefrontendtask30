<template>
  <div class="page">
    <product-list :products="products"/>
  </div>
</template>

<script>
import ProductList from '../components/products/List'
export default {
  name: 'Catalogue',
  components: {
    ProductList
  },
  data () {
    return {
      products: []
    }
  },
  beforeRouteEnter (to, from, next) {
    fetch(`https://task30backend.herokuapp.com/api/productses`)
      .then(response => {
        return response.json()
      })
      .then(products => {
        next(vm => {
          vm.setData(products)
        })
      })
  },
  methods: {
    setData (products) {
      this.products = products._embedded.productses
    }
  }
}
</script>

<style scoped>

</style>
