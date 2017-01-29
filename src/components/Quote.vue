<template>
    <div>
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class=".panel panel-default">
                <div class="panel-body quote">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        props:['quotes']
    }
</script>

<style>
    .panel-body{
        font-family:'Arizonia';
        font-size:24px;
        color:#6e6e6e;
        border:1px solid black;

    }
    .quote{
        cursor:pointer;
    }
    .quote:hover{
        background-color:pink
    }
</style>
