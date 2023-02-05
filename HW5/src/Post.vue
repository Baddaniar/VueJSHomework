<script>
export default {
    data() {
        return {
            post: {
                text: "",
                backColor: "white",
                fontColor: "black",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                fontFamily: "Arial",
                disable: true
            }
        }
    },
    methods: {
        disableChange(){
            this.post.disable = !this.post.disable
            console.log(this.post)
        },
        changeFont (event){
            this.post.fontSize = event.target.value + "px"
        }
    }
}
</script>


<template>
      <div class="post">
        <textarea :disabled="post.disable" class="postText" :style="{backgroundColor: post.backColor, color: post.fontColor, fontSize: post.fontSize, fontWeight: post.fontWeight, fontStyle: post.fontStyle, fontFamily: post.fontFamily}" name="test" id="" cols="30" rows="10" v-model="post.data"></textarea>
        <input @click="disableChange" type="button" value="Редактировать">
        <div class="changeInputs" :class="{visible: post.disable}">
            <p>Background color</p>
            <input type="color" name="" id="" v-model="post.backColor">
            <p>Font color</p>
            <input type="color" name="" id="" v-model="post.fontColor">
            <p>Font size</p>
            <input type="number" name="" id="" @input="changeFont" value="14">
            <p>Font weight</p>
            <input type="number" name="" id="" v-model="post.fontWeight">
            <p>Font style</p>
            <select name="" id="" v-model="post.fontStyle">
                <option value="normal">normal</option>
                <option value="italic">italic</option>
                <option value="oblique">oblique</option>
            </select>
            <p>Font family</p>
            <select name="" id="" v-model="post.fontFamily">
                <option value="Arial">Arial</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
            </select>
        </div>
    </div>
</template>

<style>
    .post{
        border: 1px solid red;
        width: 300px;
    }
    .changeInputs{
        border: 1px solid black;
        width: 200px;
    }
    .visible{
        display: none;
    }
</style>