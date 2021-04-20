<template>
  <div>
    <input type="text" :value="msg" @input="changeMassage" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      message:""
    };
  },
  methods:{
    changeMassage(event){
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    },
  },
};
</script>
