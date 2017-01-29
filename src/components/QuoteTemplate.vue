<template>
    <div>
       <div class="row">
           <div class="col-md-12">
               <div class="panel panel-default" v-for='(quote,index) in quotes' @click="deleteQuote(index)">
                   <div class="panel-body">
                     <h1>{{quote}}</h1>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
    export default{
           props:['quotes'],
           methods:{
            deleteQuote(index){
                this.$emit('deletedAdded',index)

            }
           }
    }
</script>
<style>
    .panel, .panel-body{
        border:1px solid black;
        font-family:'Arizonia';
        cursor:pointer;
    }
    h1{
    font-family:'Arizonia';
    }
</style>
