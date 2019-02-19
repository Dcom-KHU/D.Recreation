<template>
    <div class="main-container">
        <div class="login-box">
            <div class="title">회원 가입</div>
            <div class="input">
                <div class="message">{{id_message}}</div>
                <input type="text" placeholder="아이디" v-model="id" v-on:blur="">
            </div>
            <div class="input">
                <div class="message">{{password_message}}</div>
                <input type="password" placeholder="비밀번호" v-model="password" v-on:blur="">
            </div>
            <div class="input">
                <div class="message">{{email_message}}</div>
                <input type="email" placeholder="이메일" v-model="email" v-on:blur="">
            </div>
            <div class="input">
                <div class="message">{{nickname_message}}</div>
                <input type="text" placeholder="닉네임" v-model="nickname" v-on:blur="">
            </div>
            <div class="bottom">
                <button v-on:click="signup">회원 가입</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        head: {
            title: '회원 가입'
        },
        name: "index",
        data() {
            return {
                id: '',
                password: '',
                email: '',
                nickname: '',
                id_message: '아이디를 입력해 주세요',
                password_message: '비밀번호를 입력해 주세요',
                email_message: '이메일을 입력해 주세요',
                nickname_message: '닉네임을 입력해 주세요',
            }
        },
        methods: {
            signup() {

            },
            checkId() {

            },
            checkPassword() {

            },
            checkEmail() {

            },
            checkNickname() {

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
        height: 1.3em;
        padding-top: 0.15em;
        padding-bottom: 0.15em;
        margin-top: 1em;
        margin-bottom: 0.4em;
    }
    div.bottom {
        margin-top: 1em;
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
            height: 750px;
            position: relative;
        }
        div.login-box {
            width: 80%;
            height: 600px;
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
            height: 750px;
            position: relative;
        }
        div.login-box {
            width: 800px;
            height: 600px;
            border: #0092db 1px solid;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 2em;
        }
    }
</style>