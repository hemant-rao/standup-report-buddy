<template>
  <p>Login Page</p>
  <button type="button" class="submit-button">Submit</button>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/colors.scss";
p {
  color: $text-heading-clr;
}
.submit-button {
  background-color: $primary-btn-clr;
  border: 2px solid;
  border-color: $primary-btn-border-clr;
  border-radius: 6px;
  height: 36px;
  width: 80px;
  color: $white-clr;
}
</style>
