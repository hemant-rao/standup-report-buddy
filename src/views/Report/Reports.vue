<template>
  <div class="col-12 p-0 overflow-hidden">
    <div class="row">
      <div class="border-bottom">
        <nav class="nav">
          <router-link
            tag="li"
            to="/reports/today-report"
            active-class="active"
            class="nav-link"
            >Today's Report</router-link
          >
          <router-link
            tag="li"
            to="/reports/old-report"
            active-class="active"
            class="nav-link"
            >Old Reports</router-link
          >
        </nav>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import LogoContainer from "../Header/Logo-container.vue";
export default {
  name: "Reports",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/colors.scss";
</style>
