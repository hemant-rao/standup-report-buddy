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
  border: 1px solid;
  border-color: $primary-btn-border-clr;
  color: $white-clr;
}
</style>
