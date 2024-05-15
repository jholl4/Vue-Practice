<template>
    <div>
        <form @submit.prevent="$emit('update-active-user', enteredName, enteredAge)">
            <input type="text" @keyup.enter="$emit('update-active-user', enteredName, enteredAge)" v-model="enteredName"
                placeholder="Enter your name">
            <input type="text" keyup.enter="$emit('update-active-user', enteredName, enteredAge)" v-model="enteredAge"
                placeholder="Enter your age">
            <button @click="$emit('update-active-user', enteredName, enteredAge)">Set User Data</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: [
        'update-active-user'
    ],
    data() {
        return {
            enteredName: '',
            enteredAge: '',
        }
    }

}
</script>

<style></style>