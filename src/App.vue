<template>
  <div id="app">
      <div class="container">
          <app-header :quoteCount='quotes.length' :maxQuote='maxQuotes'></app-header>
          <app-add @quoteAdded='AddQuote'></app-add>
          <app-quote :quotes='quotes' @deletedAdded='deleteQuote'></app-quote>
          <app-footer>
              <h3>You can delete quote by clicking it</h3>
          </app-footer>

        <!--<app-header :quoteCount='quotes.length' :maxQuotes='maxQuotes'></app-header>-->
        <!--<app-new @quoteAdded='newQuote'></app-new>-->
        <!--<app-grid :quotes='quotes' @deletedAdded='deletedQuote'></app-grid>-->
        <!--<div class="row">-->
            <!--<div class="col-sm-12 text-center">-->
                <!--<div class="alert alert-info">Info Click on a Quote to delete it!</div>-->
            <!--</div>-->
        <!--</div>-->
      </div>
  </div>
</template>

<script>
import QuoteTemplate from './components/QuoteTemplate.vue';
import AddQuote from './components/AddQuote.vue';
import Footer from './components/footer.vue';
import header from './components/ProgressBar.vue';
export default {
  data:function(){
    return{
      quotes:['just a quote'],
      maxQuotes:10
    };
  },
  methods:{
        AddQuote(quote){
            this.quotes.push(quote);
        },
        deleteQuote(index){
            this.quotes.splice(index,1);
        }


  },
  components:{
    'app-quote':QuoteTemplate,
    'app-add':AddQuote,
    'app-footer':Footer,
    'app-header':header
  }
}
</script>

<style>


</style>
