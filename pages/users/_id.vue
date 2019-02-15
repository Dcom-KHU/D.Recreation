<template>
  <div class="user">
    <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p>
      <nuxt-link to="/">
        List of users
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: this.username + '의 정보',
      meta: [
        { hid: 'description', name: 'description', content: this.username + '의 정보'}
      ]
    }
  },
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>