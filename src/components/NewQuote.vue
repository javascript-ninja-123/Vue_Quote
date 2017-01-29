<template>
    <div>
        <div class="row">
            <form>
                <div class="col-md-12 form-group">
                    <label>Quote</label>
                    <textarea class='form-contrl' rows='3' v-model='quote'></textarea>
                </div>
                <div class="col-md-12 form-group">
                    <button class="btn btn-primary" @click.prevent='createNew'>Add Quote</button>
                </div>
            </form>
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
            createNew(){
                if(this.quote !=''){
                     this.$emit('quoteAdded', this.quote);
                this.quote = '';
                }
                else if(this.quote.length == 0){
                    return alert('type something');
                }

            }
        }
    }
</script>

<style>

</style>

