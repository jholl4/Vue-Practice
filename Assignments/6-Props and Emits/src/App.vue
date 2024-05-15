<template>
    <div class="main">
        <active-user key="'active'" :userName="user.name" :userAge="user.age"></active-user>
        <user-data key="'data'" @update-active-user="updateActiveUser"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                age: '',
            }
        }
    },
    methods: {
        updateActiveUser(name, age) {
            this.user.name = name;
            this.user.age = age;
        }
    }

}
</script>

<style>
.main {
    display: flex;
}

div {
    width: 50%;
}
</style>