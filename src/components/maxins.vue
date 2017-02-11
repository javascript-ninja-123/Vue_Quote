<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1>Filters & Mixins</h1>

                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filterFruit">{{fruit}}</li>
                </ul>
                <button @click="addFruits">Add Fruits</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin';
    export default{
    mixins:[fruitMixin]

    }
</script>
<style>

</style>
