<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <!--<h1>Filters & Mixins</h1>-->
                <!--<p>{{text | toUppercase | to-lowercase }}</p>-->
                <!--<p v-highlight:fontSize.delayed ="'50'">{{text | toLowercase}}</p>-->
                <!--<hr>-->
                <!--<input v-model="filterText">-->
                <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                <!--&lt;!&ndash;<li v-for="fruit in filterFruit">{{fruit}}</li>&ndash;&gt;-->
                <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                <!--<button @click="addFruits">Add fruits</button>-->
                <!--<hr>-->
                <!--<app-maxins></app-maxins>-->
                <!--<hr>-->
                <input v-model="fruitsFilter">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <button @click="doThis">yesss</button>


                <h2>{{data |convertText}}</h2>
                <h1>{{data | countNumber}}</h1>
                <h2>{{doRhat}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruintMixin2} from './fruitMixin2';
    export default{
         mixins:[fruintMixin2],
         data(){
            return{
                data:'tonggonom'
            }
         },
         filters:{
            convertText(value){
                return value.split('').reverse().join("");
            }
         },
         computed:{
            doRhat(){

                return this.data.split('').reverse().join("");;
            }
         }
    }
</script>
<style>

</style>
