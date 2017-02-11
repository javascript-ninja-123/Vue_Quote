export const fruintMixin2 = {
    data(){
        return{
            text:"hello There",
            fruits:['apple','mango','grape','yes'],
            fruitsFilter:''

        }

    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        },
        toLowercase(value){
            return value.toLowerCase();
        }
    },
    methods:{
        doThis(){
            this.fruits.push(this.fruitsFilter);
            this.fruitsFilter = '';
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.fruitsFilter);
            });
        }
    }






}
