<template>
    <div>
        <div class="row">
            <div class='col-md-12'>
                <form>
                    <div class="form-group">
                        <label>first name</label>
                        <input type="text" class="form-control"  placeholder="name" v-model.lazy='userName.name' >
                    </div>
                    <div class="form-group">
                        <label>Lastname</label>
                        <input type="text" class="form-control"  placeholder="lastname" v-model.lazy="userName.lastname">
                    </div>

                    <div class="checkbox ">
                        <label>
                            <input type="checkbox" value="sendMail" v-model='userName.sendMail'>
                            regualrMail
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="ExpressNamil" v-model='userName.sendMail'>
                           expressMail
                        </label>
                    </div>

                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios"  value="male"  v-model="userName.options">
                            male
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios"  value="female" v-model="userName.options">
                           female
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" value="other" v-model="userName.options">
                          other
                        </label>
                    </div>
                    <textarea class="form-control" rows="3" v-model.lazy='userName.textarea'></textarea>
                    <app-switch v-model="dataSwitch" :putman='yo' @namereset='name' @adddddddd='yooooooo'></app-switch>
                    <button type="submit" class="btn btn-default" @click.prevent='submitEvery'>Submit</button>

                </form>
            </div>

            <div class="col-md-12" v-if="donotSHow">
                <h1> firstname is {{userName.name}}</h1>
                <h1> lastname is {{userName.lastname}}</h1>
                <h1>{{man}}</h1>
                <ul>
                    <li v-for="item in userName.sendMail">{{item}}</li>

                </ul>
                <h1>{{userName.options}}</h1>
                <h1>{{userName.textarea}}</h1>
                <h1>Swtiched {{dataSwitch}}</h1>

            </div>
        </div>
    </div>
</template>
<script>
    import switch2 from './switch.vue';
    export default{
        data:function(){
            return{
                resultLater:false,
                userName:{
                    name:'',
                    lastname:'',
                    sendMail:[],
                    options:'female',
                    textarea:''



                },
                donotSHow:false,
                dataSwitch:true,
                man:'',
                yo:'ddddd'

            }
        },
        methods:{
        doIt(){

        this.donotSHow = true;
        },
        submitEvery(){
            this.donotSHow = !this.donotSHow;

        },
        name(){
            this.yo = 'ddddsss'
        },
        yooooooo(){
            this.donotSHow=! this.donotSHow;
        }
        },
        components:{

            'app-switch':switch2
        }

    }
</script>
<style>

</style>
