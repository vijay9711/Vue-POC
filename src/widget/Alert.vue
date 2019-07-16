<template>
    <div class="alert-box">
        <label class="alert-text px-4 py-2" :style="getStyle(getType)"> {{alertText}} </label>
    </div>    
</template>
<script>
import { constants } from 'crypto';
export default {
    props:["alertText","getType"],
    methods: {
        getStyle(getType){
            console.log(getType)
        switch (getType) {
            case 'success':
                return "border:1px solid;border-radius:10px; border-color:green; outline-color:green;"
            case 'warning':
                return "border:1px solid;border-radius:10px; border-color:yellow; outline-color:yellow;"
            case 'alert':
                return "border:1px solid;border-radius:10px; border-color:#FF4E4E; outline-color:#FF4E4E; background-color:#FF4E4E; color:white;"
            default:
                return "border-radius:10px"
        }
        }
    },
}
</script>
<style scoped>
.alert-box{
    position: absolute;
    top: .7rem;
    right: 1rem;
    animation-name: alert;
    animation-duration: .2s;
    outline: 1px;
}
@keyframes alert{
    0%{
        margin-right: -40px;
    }
    25%{
        margin-right: -30px;
    }
    50%{
        margin-right: -20px;
    }
    100%{
        margin-right: 0px;
    }
}
</style>
