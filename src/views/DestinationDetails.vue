<template>
   <section>
       <h1>{{ destination.name }}</h1>
       <div>
           <img :src="require(`@/assets/${destination.image}`)" />
           <p> {{destination.description}} </p>
       </div>
   </section>
</template>

<script>
import store from '@/store.js';
export default {
    data() {
        return {
            destinationId: this.$route.params.id,
        }
    },
    computed: {
        destination() {
            console.log()
            return store.destinations.find(destinaton => destinaton.id == this.destinationId);
        }
    },
    created() {
        // console.log(this.$route.params.id)
        // if (store.destinations.find(destinaton => destinaton.id == this.destinationId) == undefined) {
        //     this.$route.push('about');
        // }
    }
}
</script>
