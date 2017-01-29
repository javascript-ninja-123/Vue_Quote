<template>
    <div>
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="form-group">
                    <label>Add Quote Please</label>
                    <textarea class="form-control" rows="3" v-model='quote'></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger" @click="addQuote()">Add Button</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
               return{
                quote:''

               };
        },
        methods:{
            addQuote(){
                 if(this.quote.length !=0){
                    this.$emit('quoteAdded',this.quote);
                this.quote = '';
                 }
                 else if(this.quote.length == 0){

                    return alert('type something, no blank');

                 }

            }
        }
    }
</script>
<style>

</style>
