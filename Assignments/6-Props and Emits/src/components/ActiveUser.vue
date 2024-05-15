<template>
    <div>
        <h2>Username: {{ userName }}</h2>
        <h3>Age: {{ userAge }}</h3>
    </div>
</template>

<script>
export default {
    props: ['userName', 'userAge'],
    data() {
        return {

        }
    },
}
</script>

<style></style>