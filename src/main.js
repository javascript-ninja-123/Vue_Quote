import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
    bind(el,binding,vnode){
     // el.style.backgroundColor = 'green';
     //    el.style.backgroundColor = binding.value;
        var delay = 0;
        if(binding.modifiers['delayed']){
          delay = 3000;
        }
        if(binding.modifiers['blink']){
            let mainColor = binding.value.mainColor;
            let secondColor =binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(function(){
                setInterval(function(){
                    currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                    if(binding.arg == 'background'){

                        el.style.backgroundColor = currentColor;
                    }else{
                        el.style.backgroundColor = currentColor;
                    }
                },binding.value.delay);

            },1000);
        }
        else{
            setTimeout(function(){
                if(binding.arg == 'background'){

                    el.style.backgroundColor = binding.value.mainColor;
                }
                else{
                    el.style.color = binding.value.mainColor;
                }
            },delay);
        }
    }
});

Vue.directive('poop',{
  bind(el,binding,vnode){

      var delay = 0;
      if(binding.modifiers['delayed']){

          delay = 3000;
      }
      if(binding.modifiers['blink']){
        let mainFont = binding.value + 'px';
        // let secondFont = 80 + 'px';
        let thirdFont = 30 + 'px';
        let currentFont = mainFont;


        setTimeout(function(){
            setInterval(function(){
                currentFont == thirdFont ? currentFont = mainFont : currentFont = thirdFont;
                if(binding.arg == 'fontSize'){
                    el.style.fontSize = currentFont;

                }
                else{
                    el.style.fontSize = currentFont;
                }

            },1000);
        },1000)

      }

      else{
          setTimeout(function(){
              if(binding.arg == 'fontSize'){
                  el.style.fontSize = binding.value + 'px'

              }
              else{
                  el.style.fontSize = 20+'px';
              }


          },delay);


      }

  }
});


Vue.directive('practiceMan',{
    bind(el,binding,vnode){
        var delay = 0;
        if(binding.modifiers['delayed']){

            delay = 3000;
        }

        setTimeout(function(){
            if(binding.arg == 'textCenter'){

                el.style.textAlign = binding.value;

            }
            else {

                el.style.textAlign ='right';

            }
        },delay);

    }
});

    Vue.filter('to-lowercase',function(value){
       return value.toLowerCase();

    });

    Vue.mixin({
        created(){
            console.log('global mixin created hook');
        }

    });

    Vue.filter('count-string',function(value){
            const count = value.length;
        return value.concat(count);
    });


    Vue.mixin({
        created(){
            console.log('ddd');
        }
    });

    Vue.filter('countNumber',function(value){
        var len = value.length;
        return value + " " + (len);

    });
new Vue({
  el: '#app',
  render: h => h(App)
})
