<template>
    <div>
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70"
                         aria-valuemin="0" aria-valuemax="100" :style="{width:(quoteCount/maxQuote) * 100 + '%'}">
                            {{quoteCount}}/ {{maxQuote}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
         props:['quoteCount','maxQuote']
    }
</script>
<style>

</style>