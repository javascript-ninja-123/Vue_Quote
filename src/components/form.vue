<template>
    <div>
       <div class="row">
           <div class="col-md-12">
               <h1 class="text-center">File a Complaint</h1>
               <form>
                   <div class="form-group">
                       <label >Email address</label>
                       <input type="email" class="form-control"  placeholder="Email" v-model.lazy="userData.email">
                   </div>
                   <div class="form-group">
                       <label>Password</label>
                       <input type="password" class="form-control"  placeholder="Password" v-model.lazy='userData.password'>
                       {{userData.password}}
                   </div>
                   <div class="form-group">
                       <label >Age</label>
                       <input type="type" class="form-control"  placeholder="age" v-model.lazy.number="userData.age">
                   </div>
                   <div class="form-group">
                       <label for="exampleInputFile">File input</label>
                       <input type="file" id="exampleInputFile">
                       <p class="help-block">Example block-level help text here.</p>
                   </div>
                   <div class="form-group">
                       <label>Message</label>
                       <textarea  rows="5" class="form-control" v-model.lazy='userData.message'></textarea>
                   </div>
                   <div class="checkbox">
                       <label>
                           <input type="checkbox" value="regularMail" v-model="sendMail">
                        regular
                       </label>
                   </div>
                   <div class="checkbox">
                       <label>
                           <input type="checkbox" value="expressMail" v-model="sendMail">
                           express
                       </label>
                   </div>

                   <div class="radio">
                       <label>
                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="Male" v-model="gender">
                           Male
                       </label>
                   </div>
                   <div class="radio">
                       <label>
                           <input type="radio" name="optionsRadios" id="optionsRadios2" value="Female" v-model="gender">
                           Female
                   </div>
                   <label>Drop Down</label>
                   <select class="form-control" v-model="option">
                       <option v-for="item in options" :selected='item == "medium"'>{{item}}</option>

                   </select>
                   <button @click.prevent='SubmitForm' class="btn btn-default">Submit</button>
               </form>
           </div>

           <br>
           <div class="col-md-12" v-if="isSubmitted">
               <h2>email address: {{userData.email}}</h2>
               <h2>password: {{userData.password}}</h2>
               <h2>age: {{userData.age}}</h2>
               <h2 style="white-space:pre">message: {{userData.message}}</h2>
               <ul>
                   <li v-for="item in sendMail">{{item}}</li>
               </ul>
               <h2>{{gender}}</h2>
               <h2>option : {{option}}</h2>
           </div>
       </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                userData:{
                    email:'',
                    password:'',
                    age:'',
                    message:'A new Text'
                },
                sendMail:[],
                gender:'Male',
                options:['high','medium','low'],
                option:'high',
                isSubmitted:false
            };
        },
        methods:{
            SubmitForm(){
                this.isSubmitted = true;
            }
        }
    }
</script>
