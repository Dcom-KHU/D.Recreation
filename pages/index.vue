<template>
    <div>
        <myheader></myheader>
        <h1>Hi Vue!</h1>
        <nuxt-link to="/hello">About</nuxt-link>
    </div>
</template>

<script>
import myheader from '../components/myheader'

export default {
    head: {
        title: 'Index page'
    },
    components: {
        myheader
    }
}
</script>

