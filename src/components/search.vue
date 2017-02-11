<template>
    <div>
        <div class="row">
            <div class="col-xs-12" v-if="searchShow">
                <form class="form-inline text-center">
                    <!--<div class="form-group">-->
                        <!--<input type="text" class="form-control" placeholder="Hourly Rate" v-model="legal">-->
                    <!--</div>-->
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Zip Code" v-model="zip" >
                    </div>
                    <button type="submit" class="btn btn-danger" @click.prevent="showResult">Get Started</button>
                </form>
            </div>

            <div class="col-xs-12" v-if="resultShow">
                <ul>
                    <li v-for="(lawyer,index) in matchLawyer">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                   <h2>{{lawyer.name}}</h2>
                                </h3>
                            </div>
                            <div class="panel-body">
                              <div class="col-xs-6 text-left">
                                  zipcode: {{lawyer.zipcode}}<br>
                                  rating: {{lawyer.rate}}<br>
                                  hourly rate:{{lawyer.Rate}}
                              </div>
                              <div class="col-xs-6 text-right">
                                  <button>Contact</button>
                                  <button @click=deleteItem(index)><i class="fa fa-trash fa-2x remove" aria-hidden="true"></i></button>
                              </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <button @click="backStage">Back</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                legal:'',
                zip:'',
                resultShow:false,
                searchShow:true,
                lawyers:[

                    {
                        name:'lawyer1',
                        rate:"8/10",
                        Rate:'300',
                        zipcode:'95616'

                    },
                     {
                        name:'lawyer2',
                        rate:"7/10",
                        Rate:'200',
                        zipcode:'95617'

                    },
                     {
                        name:'lawyer3',
                        rate:"6/10",
                        Rate:'150',
                        zipcode:'95618'

                    },
                     {
                        name:'lawyer4',
                        rate:"4/10",
                        Rate:'500',
                        zipcode:'95619'

                    },
                     {
                        name:'lawyer5',
                        rate:"2/10",
                         Rate:'600',
                        zipcode:'95616'

                    },
                ]
            }
        },
        methods:{
            showResult(){
                this.searchShow = false;
                this.resultShow =true;

            },
            matchRate(){

            },
            deleteItem(index){
                this.lawyers.splice(index,1);
            },
            backStage(){
                 this.searchShow = true;
                this.resultShow =false;
                this.zip = ''
            }

        },
        computed:{

            matchLawyer(){
                return this.lawyers.filter((element) => {
                    var zipcode = this.zip;
                    var element = element.zipcode;
                    return element.match(zipcode);


                })
            }

        }
    }
</script>
<style>
body{
margin:0;
padding:0;
}
    .col-xs-12{
        background-color:lightpink;
        padding:30px;
        border-radius:15px;
        margin-top:10%;
    }
    ul,li{
margin:0;
padding:0;
list-style:none;}


</style>
