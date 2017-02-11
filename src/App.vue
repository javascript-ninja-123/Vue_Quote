<template>
  <div id="app">
      <div class="container">
            <app-search  @actionMoved='triggerResult'></app-search>
      </div>
  </div>
</template>

<script>

import Search from './components/search.vue';
export default {
    methods:{
        triggerResult(){
            alert(Legal);
        }
    },
    components:{
    'app-search':Search

    }
}
</script>

<style>


</style>
