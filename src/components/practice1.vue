<template>
    <div>

        <slot name="title"></slot>
        <button @click="countThing">Add Number</button>
        <p>{{counter}}</p>
        <slot></slot>

    </div>
</template>

<script>

    export default{
        props:['myName'],
        data:function(){
            return{
                yesIt:false,
                counter:0

            };
        },
        methods:{
            pressIt(){
                this.yesIt = true;
                console.log('yess');

            },
            doIt(){
            console.log("ddd");
            },
            countThing(){
                this.counter ++;
            },
            switchName(){
                return this.myName.split('').reverse().join('');
            }
        }
    }
</script>
<style scoped>
    div{
        border:2px solid black;
        box-shadow:2px 2px 2px black;
        background:lightblue;
    }
    h1{
        color:blue;
    }


</style>
