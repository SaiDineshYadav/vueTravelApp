<template>
<section>
    <h1>Experiences </h1>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="require(`@/assets/${experience.image}`)" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{experience.name}}</h5>
    <p class="card-text">{{experience.description}}</p>
  </div>
</div>
</section>
</template>

<script>
import store from '@/store.js';

export default {
    props: {
        slug: {
            type: String,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        experience() {
            let data = store.destinations.find(destinaton => destinaton.slug == this.slug);
            return data.experiences.find( exp => exp.slug == this.experienceSlug);
        }
    },
}
</script>

<style>

</style>