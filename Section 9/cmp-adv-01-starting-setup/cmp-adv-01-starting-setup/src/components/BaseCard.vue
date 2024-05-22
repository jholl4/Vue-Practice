<template>
    <div>
        <header>
            <slot name="head">
                <h2>Default Header</h2>
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots); // property provided by vue for the slot data that this component received via slots
    },
}
</script>

<style scoped>
section div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>