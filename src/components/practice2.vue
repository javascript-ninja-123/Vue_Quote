<template>
    <div>

        <slot name="footer"></slot>
        <h3>YOu can do anything here</h3>

    </div>
</template>

<script>

    export default{
        data:function(){
            return{
                yesIt:false

            };
        },
        props:['quote','man'],
        methods:{
            pressIt(){
                this.yesIt = true;
                console.log('yess');

            },
            doIt(){
            console.log("ddd");
            }
        }
    }
</script>
<style scoped>
    div{
        border:2px solid black;
        box-shadow:2px 2px 2px black;
       background:orange;
    }

</style>