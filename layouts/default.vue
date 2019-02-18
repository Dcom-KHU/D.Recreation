<template>
    <div>
        <myheader></myheader>
        <div>
            <nuxt />
        </div>
        <myFooter></myFooter>
    </div>
</template>

<script>
    import myheader from '../components/myheader'
    import myFooter from '../components/myFooter'

    export default {
        name: "default",
        components: {
            myheader,
            myFooter
        }
    }
</script>

<style scoped>

</style>