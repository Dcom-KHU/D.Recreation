<template>
    <div>
        <div class="header">
            <nuxt-link to="/"><img src="/D.Com.png" alt="메인화면으로 이동" class="head"></nuxt-link>
            <div class="menuIcon" v-on:click="toggle()" v-bind:class="{active : menuToggle}">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <ul v-bind:class="{active : menuToggle}">
                <li><nuxt-link to="/login">로그인</nuxt-link></li>
            </ul>
        </div>
        <div class="air"></div>
    </div>
</template>

<script>
    export default {
        name: "siteHeader",
        data() {
            return {
                menuToggle: false
            }
        },
        methods : {
            toggle() {
                if (this.menuToggle){
                    this.menuToggle = false
                }
                else {
                    this.menuToggle = true
                }
            }
        }
    }
</script>

<style scoped>
    * {
        transition: 0.4s;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    @media screen and (min-width: 891px) {
        ul {
            float: right;
            margin: 0;
            height: 80px;
            padding-right: 80px;
            list-style: none;
        }
        li {
            display: inline-block;
            width: 120px;
            height: 80px;
            padding: 0;
        }
        a {
            text-decoration: none;
            color: black;
            font-size: 1.5em;
            text-align: center;
            margin: auto;
            vertical-align: center;
            line-height: 80px;
        }
        a:hover {
            color: rgb(50, 130, 255);
        }
        div.header {
            height: 80px;
            width: 100%;
            overflow: hidden;
            border-bottom: #7f828b 1px solid;
            margin: auto;
            position: fixed;
            background-color: white;
            z-index: 1;
        }
        img.head {
            float: left;
            padding-left: 80px;
            height: 90%;
        }
        div.menuIcon {
            display: none;
        }
        .air {
            height: 80px;
        }
    }
    @media screen and (max-width: 890px) {
        img.head {
            float: left;
            height: 90%;
            padding-left: 5px;
            overflow: visible;
            z-index: 1;
        }
        div.header{
            border-bottom: #7f828b 1px solid;
            height: 70px;
            width: 100%;
            position: fixed;
        }
        div.menuIcon {
            display: inline-block;
            cursor: pointer;
            width: 70px;
            height: 70px;
            margin: auto;
            float: right;
        }
        .bar1, .bar2, .bar3 {
            width: 40px;
            height: 4px;
            background-color: #47494e;
            margin-left: 10px;
        }
        .bar1 {
            margin-top: 17px;
        }
        .bar2, .bar3{
            margin-top: 10px;
        }
        ul {
            clear: both;
            float: right;
            display: none;
            z-index: 2;
            height: 120px;
            margin: 0;
            list-style: none;
            border: #7f828b 1px solid;
            margin: 0;
            padding: 0;
            background-color: #7f828b;
        }
        li {
            width: 100px;
            height: 30px;
            display: block;
            margin: auto;
        }
        li>a{
            text-decoration: none;
            color: white;
            line-height: 30px;
            text-align: center;
            margin-left: 10px;
        }
        .active .bar1 {
            transform: rotate(-45deg) translate(-10px, 10px);
        }
        .active .bar2 {
            opacity: 0;
        }
        .active .bar3 {
            transform: rotate(45deg) translate(-10px, -10px);
        }
        ul.active {
            display: block;
            position: absolute;
            right: 0;
            top: 70px;
        }
        .air {
            height: 70px;
        }
    }
</style>