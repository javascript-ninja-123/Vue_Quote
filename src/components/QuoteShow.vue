<template>
    <div>
        <app-quote v-for='quote in quotes'>{{quote}}</app-quote>
    </div>
</template>
<script>
    import QuoteTemplate from './QuoteTemplate.vue';
    export default{
           props:['quotes'],
           components:{
            'app-quote':QuoteTemplate
           }
    }
</script>
<style>
    .panel, .panel-body{
        border:1px solid black;
        fot-family:'Arizonia';
    }
</style>
