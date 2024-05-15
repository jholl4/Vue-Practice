<template>
    <div>
        <form @submit.prevent="submitNewFriend">
            <!-- <input type="text" placeholder="id" v-model="newFriend.id"> -->
            <input type="text" placeholder="name" v-model="newFriend.name">
            <input type="tel" placeholder="phone" v-model="newFriend.phone">
            <input type="email" placeholder="email" v-model="newFriend.email">
            <button @click.prevent="submitNewFriend">Add Contact</button>
        </form>
    </div>
</template>
<script>
export default {
    props: [],
    emits: ['add-friend-to-list'],
    data() {
        return {
            newFriend: {
                // id: "",
                name: "",
                phone: "",
                email: "",
                // isFavorite: false,
            }
        }
    },
    methods: {
        submitNewFriend() {
            this.$emit('add-friend-to-list', this.newFriend)
        }
    }
}
</script>
<style>
#app input {
    font: inherit;
    padding: 0.15rem;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}

#app form div {
    margin: 1rem 0;
}
</style>