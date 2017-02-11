<template>
    <div>
        <div id="on" @click="switched('idonotknow')" :class='{active: value}'>
                On
        </div>

        <div id="off" @click="switched('falsemananan')" :class="{active: !value}">
        Off
        </div>


      <button @click.prevent='resetName'>Reset</button>
       <button @click.prevent='yesssssss'>dddddddd</button>
        <p>{{putman}}</p>
    </div>
</template>

<script>

    export default{

        props:['value','putman'],
        methods:{

        switched(isOn){
            this.$emit('input',isOn);
        },
        resetName(){
          this.$emit('namereset');
     },
     yesssssss(){

        this.$emit('adddddddd')
     }
        }

    }
</script>
<style>
  #on, #off{
    width:40px;
    height:20px;
    background-color:lightgrey;
    padding:2px;
    display:inline-block;
    margin:10px -2px;
    box-sizing: content-box;
    cursor:pointer;
    text-align:center;

  }
  #on:hover, #on.active{
    background-color:green;
  }
  #off:hover, #off.active{
    background-color:coral;
  }

</style>
