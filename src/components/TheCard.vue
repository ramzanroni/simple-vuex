<template>
    <div class="the-card">
        <div class="the-card_title">
            {{ cardTitel }}
        </div>
        <div class="the-card_body">
            <slot></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:"TheVue",
    props: ["cardTitel"],
    data(){
        return {
            nameTitle: "Hello"
        }
    }
}
</script>
<style scoped>
.the-card{
    width: 200px;
    border: 1px solid #006f88;
    min-height: 200px;
    margin: 22px auto;
}
.the-card_title{
    background: #167db1;
    padding: 5px 11px;
    color: #fff;
}
.the-card_body{
    padding: 11px;
}
.the-card_body img{
    height: 111px;
}
</style>