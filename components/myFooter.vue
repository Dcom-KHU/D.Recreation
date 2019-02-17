<template>
    <div>
        <div class="footer">
            <div class="title">D.Recreation</div>
            <div class="made">Made By WYDGA</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped>
    div.footer{
        border-top: #7f828b 1px solid;
        color: #47494e;
        padding: 10px;
    }
    @media screen and (max-width: 890px) {
        div.footer>div {
            padding-left: 10px;
        }
    }
    @media screen and (min-width: 891px) {
        div.footer>div {
            padding-left: 30px;
        }
    }
</style>