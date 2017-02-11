<template>
    <div>
        <div class="col-xs-12 text-center">
            <ul>
                <li v-for="x in 5">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                <slot name='service'></slot>
                            </h3>
                        </div>
                        <div class="panel-body">
                            <slot name='zipcode'></slot>
                        </div>
                    </div>
                </li>
             </ul>

        </div>
    </div>
</template>

<script>

    export default{




    }
</script>
<style>

</style>
