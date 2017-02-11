export const mixim ={
data(){return{header:'dddddddd'}},
    computed:{

        stringCount(){
            var count = this.header.length;
            return this.header.concat(count);
        }
    }



};