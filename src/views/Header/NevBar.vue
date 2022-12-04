<template>
  <div class="col-12">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-2">
      <a class="navbar-brand p-0" style="height: 30px; width: 160px;" href="#">
        <LogoContainer class="h-100 w-100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" active-class="active" class="nav-item nav-link"
            >Home</router-link
          >
          <router-link
            to="/about"
            active-class="active"
            class="nav-item nav-link"
            >About</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="/login"
            class="nav-link"
            >Login</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="/registration"
            class="nav-link"
            >Registration</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="/dashboard"
            class="nav-link"
            >Dashboard</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="/reports"
            class="nav-link"
            >Reports</router-link
          >
        </div>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
  </div>
</template>
<script>
import LogoContainer from "../Header/Logo-container.vue";
export default {
  name: "nevBar",
  components: {
    LogoContainer,
  },
  setup() {},
};
</script>
<style lang="scss">
#nav {
  // padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active,
.active.nav-link {
  color: black;
  background: transparent;
  border-bottom: 1px solid #4285f4 !important;
}
.nav {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  .nav-link {
    border-bottom: 1px solid #fff;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }
}
</style>
