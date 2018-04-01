<template>
    <div class='search-bar'>
        <input @input='changeSearchTerm' />
    </div>
</template>
<script>
    export default {
        props: {
            onSearchTermChange: {
                type: Function,
                required: true
            }
        },

        methods: {
            changeSearchTerm (event) {
                this.onSearchTermChange(event.target.value)
            }
        }
    }
</script>
<style>
    .search-bar {
        margin: 20px;
        text-align: center;
    }

    .search-bar input {
        width: 75%;
    }
</style>
