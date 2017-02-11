<template>
    <div>
       <div class="row">
           <div class="col-md-12">
               <p v-text="'hetyyyy'"></p>
               <p v-html="'<strong>dddd</strong>'"></p>
           </div>
           <hr>
           <div class="col-md-12">
              <h1>Custom Directives</h1>
              <p v-highlight:background.delayed.blink="{mainColor:'pink',secondColor:'orange',delay:500}">ddddddsa</p>
               <h1 v-poop:fontSize.delayed.blink="'60'">yesssdd</h1>
               <h1 v-local-poop:fontSize="'90'">yesssdd</h1>
               <h1 v-local-sung:color="'red'">YoLo</h1>
               <h1 v-local-practice:fontBold="'400'">YoLo</h1>
               <h1 v-local-practice>YoLo</h1>
               <h1 v-practiceMan:textCenter.delayed="'center'">Sung</h1>
               <h1 v-yonna-poop:padding.delayed="'70'">letme go</h1>


               <button v-customOn:click='clickMe'>CLick me</button>
               <!--<div style="width:300px; height:300px; background-color:pink;"-->

               <!--v-customOn:mouseenter='mouserOver'-->
               <!--v-customOn:mouseleave='mouseLeave'-->

               <!--&gt;-->
               <!--</div>-->
               <button v-buttonClick:click="clickMe">dddd</button>
           </div>
       </div>
    </div>
</template>
<script>

    export default{
            directives:{
                'local-poop':{
                       bind(el,binding,vnode){
                                                         if(binding.arg == 'fontSize'){
                                      el.style.fontSize = binding.value + 'px'

                                  }
                                  else{
                                   el.style.fontSize = 20+'px';
                                  }


                       }
                },
                'local-sung':{
                    bind(el,binding,vnode){
                        if(binding.arg == 'color'){
                            el.style.color = binding.value;

                        }
                        else{

                            el.style.color = 'blue';
                        }


                    }
                },
                'local-practice':{
                    bind(el,binding,vnode){
                        if(binding.arg == 'fontBold'){
                            el.style.fontWeight = binding.value;

                        }
                        else{

                        el.style.fontWeight = 'bold';
                        }
                    }
                },
                'yonna-poop':{
                    bind(el,binding,vnode){
                        var delayed = 0;
                        if(binding.modifiers['delayed']){
                       var  delayed = 2000;



                        }
                        setTimeout(function(){

                                if(binding.arg == "padding"){

                            el.style.padding = binding.value + 'px'

                        }
                        else{
                            el.style.padding = 10 + 'px'
                        }



                        },delayed)


                    }

                },
                'customOn':{
                    bind(el,binding){
                            const type = binding.arg;
                            const fn = binding.value;
                        el.addEventListener(type,fn);

                    }
                },
                'buttonClick':{
                    bind(el,binding){
                            const font = binding.arg;
                            const function2 = binding.value;
                        el.addEventListener(font,function2);

                    }
                }
            },
            methods:{
                clickMe(){

                 alert('yesssss');
                },
                mouserOver(){

                    console.log('over')
                },
                mouseLeave(){
                    console.log('leave')
                }

            }
      }
</script>

<style>

</style>
