<template>
<div>
<GoBack></GoBack>
   <section>
       
       <h1>{{ destination.name }}</h1>
       <div>
           <img :src="require(`@/assets/${destination.image}`)" />
           <p> {{destination.description}} </p>
       </div>
   </section>
   <section>
       <h2>Top Experiences in  {{destination.name}} </h2>
       <div class="experiences" id="experience">
       <div class="card" style="width: 18rem;" v-for="exp in destination.experiences" :key="exp['slug']">
 <router-link :to="{name: 'ExperienceDetails', params: {experienceSlug: exp.slug}, hash:'#experience'}"> 
  <img class="card-img-top" :src="require(`@/assets/${exp.image}`)" alt="Card image cap">
      </router-link>

  <div class="card-body">
    <h5 class="card-title">{{exp.name}}</h5>
  </div>
</div>
       </div>
<router-view :key="$router.path" ></router-view>
   </section>
</div>
</template>

<script>
import store from '@/store.js';
import GoBack from '@/components/GoBack';
export default {
    components: {GoBack},
    data() {
        return {
            // destName: this.$route.params.slug,
        }
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination() {
            return store.destinations.find(destinaton => destinaton.slug == this.slug);
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

<style>
.experiences{
    padding: 40px 0;
}
</style>
