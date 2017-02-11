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
                <hr>
                <app-prac></app-prac>
            </div>
        </div>
    </div>
</template>

<script>
    import Prac from './filterPractice.vue';
    import {fruintMixin2} from './fruitMixin2';
    export default{
        mixins:[fruintMixin2],
        components:{
        "app-prac":Prac
        }

    }
</script>
<style>

</style>
