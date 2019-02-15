<template>
    <div>
        <h1>Hi from {{name}}</h1>
        <nuxt-link to="/">About</nuxt-link>
    </div>
</template>

<script>
export default {
    asyncData() {
        return {
            name: process.static ? 'static' : (process.server ? 'server' : 'client')
        }
    },
    head: {
      title: 'Hello page',
      meta: [
        { hid: 'description', name: 'description', content: '안녕'}
      ]
    }
}
</script>

