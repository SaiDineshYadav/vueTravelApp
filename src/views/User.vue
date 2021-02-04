<template>
    <div>
        <h1>Users</h1>
        <h3>Welcome {{user}} </h3>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
import store from '@/store.js';

export default {
    data() {
        return {
            user: store.user
        }
    },
    methods:{
        logout() {
            store.user = '';
            this.$router.push('/login');
        }
    }
}
</script>