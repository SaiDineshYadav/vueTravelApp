<template>
    <div>
        <h1>Login Form</h1>
        <div>
            <label>User Name</label>
            <input v-model="userName" type="text" placeholder="Enter User Name" />
            <label>Password</label>
            <input v-model="password" type="text" placeholder="Enter Password" />
            <button @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import store from '@/store.js';

export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        login() {
            store.user = this.userName;
            this.$router.push('/user');
        }
    }
}
</script>
