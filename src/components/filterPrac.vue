<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1>{{header | toReverse | count-string}}</h1>
                <h2>{{ toReverse }}</h2>
                <h3>{{stringCount}}</h3>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {mixim} from './mixim';
    export default{
        mixins:[mixim],

    }
</script>
