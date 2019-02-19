<template>
    <div class="main-container">
        <div class="login-box">
            <div class="title">로그인</div>
            <div class="message">{{message}}</div>
            <div class="input">
                <input type="text" placeholder="아이디" v-model="id">
                <input type="password" placeholder="비밀번호" v-model="password">
            </div>
            <div class="bottom">
                <button v-on:click="login">로그인 하기</button>
                <span class="sign-up"><nuxt-link to="/signup">회원 가입</nuxt-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        head: {
            title: '로그인'
        },
        name: "index",
        data() {
            return {
                id: '',
                password: '',
                message: '로그인 해 주세요.'
            }
        },
        methods: {
            login() {

            }
        }
    }
</script>

<style scoped>
    span.sign-up {
        float: right;
        height: 2em;
        padding: 0.5em;
    }
    span.sign-up > a{
        text-decoration: none;
        color: black;
    }
    div.title{
        padding-bottom: 1em;
        font-weight: bold;
        font-size: 2em;
    }
    input {
        display: block;
        width: 100%;
        height: 1.5em;
        font-size: 1.2em;
        padding: 0.15em;
        margin-bottom: 0.2em;
    }
    div.message {
        padding-bottom: 1em;
    }
    div.bottom {
        padding-top: 1em;
    }
    button {
        background-color: #0092db;
        border: none;
        color: white;
        padding: 1em;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1em;
    }
    @media screen and (max-width: 890px) {
        div.main-container {
            width: 100%;
            height: 500px;
            position: relative;
        }
        div.login-box {
            width: 80%;
            height: 300px;
            border: #0092db 1px solid;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 2em;
        }
    }
    @media screen and (min-width: 891px) {
        div.main-container {
            width: 100%;
            height: 600px;
            position: relative;
        }
        div.login-box {
            width: 800px;
            height: 400px;
            border: #0092db 1px solid;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 2em;
        }
    }
</style>