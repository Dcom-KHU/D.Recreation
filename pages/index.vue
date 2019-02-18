<template>
    <div class="main-container">
        <div class="center-left">
            <i class="fas fa-dice"></i>
        </div>
        <div class="center-right">
            <div class="title">D.Recreation</div>
            <div class="content">뭔가 보여드리겠습니다.</div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: '메인 페이지'
    },
    layout: 'default'
}
</script>

<style scoped>
    i {
        height: 150px;
        font-size: 150px;
        color: white;
    }
    @media screen and (min-width: 891px) {
        div.main-container {
            width: 100%;
            height: 500px;
            background-color: #007aff;
            position: relative;
        }
        div.center-left{
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -50%);
        }
        div.center-right{
            position: absolute;
            top: 50%;
            left: 70%;
            transform: translate(-50%, -50%);
        }
    }
    @media screen and (max-width: 890px) {
        div.main-container {
            width: 100%;
            height: 400px;
            background-color: #007aff;
            padding-top: 100px;
            text-align: center;
            box-sizing: border-box;
        }
    }
    div.title {
        font-weight: bold;
        font-size: 2em;
        color: white;
    }
    div.content {
        font-size: 1.5em;
        color: white;
    }
</style>