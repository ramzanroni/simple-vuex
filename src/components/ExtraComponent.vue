<template>
    <h1>Extra</h1>
    <p>Name: {{ username }}</p>
    <p>Address: {{ address }}</p>
    <p>Phone: {{ phone }}</p>
    <input type="text" v-model="name">
    <button @click="clearName">Clear</button>
    <p>Your Name:  {{ name }}</p>
</template>
<script>
export default {
    name: 'ExtraComponent',
    props:['username', 'address', 'phone'],
    components: {
    },
    data() {
        return {
            name:'',
          
        }
    },
    computed: {

    },
    methods: {
        clearName(){
            this.name=""
        }
    },
    watch: {

    }

}
</script>