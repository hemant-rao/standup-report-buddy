<template>
  <div class="col-12 p-0 overflow-hidden">
    <div class="row">
      <div class="form-cont">
        <div class="form-wrap">
          <article class="card">
            <div class="card-body p-5">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="nav-tab-card">
                  <div class="logo">
                    <LogoContainer class="h-100 w-100" />
                  </div>
                  <form class="form-horizontal" role="form">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="abc@example.com"
                        required=""
                        maxlength="64"
                      />
                      <!-- onKeyPress="if(this.value.length==64) return false;" -->
                    </div>
                    <!-- form-group.// -->
                    <div class="col-12 text-center mt-4">
                      <button
                        class="subscribe btn btn-primary btn-block col-12"
                        type="submit"
                      >
                        Forget
                      </button>
                    </div>
                    <div class="col-12 text-right mt-2">
                        <router-link to="/login" class="nav-link d-flex justify-content-end">Login</router-link>
                    </div>
                  </form>
                </div>
              </div>
              <!-- tab-content .// -->
            </div>
            <!-- card-body.// -->
          </article>
          <!-- card.// -->
        </div>
        <!-- row.// -->
      </div>
      <!--container end.//-->
    </div>
  </div>
</template>

<script>
import LogoContainer from "../Header/Logo-container.vue";
export default {
  name: "Forgot",
  components: {
    LogoContainer,
  },
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
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 15px;
  border: 1px solid #ececec;
  border-radius: 15px;
}
form {
  border: 0 solid #ececec;
  text-align: left;
}
.form-cont {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  height: auto;
  vertical-align: middle;
  border-radius: 15px;
  margin-top: 5%;
}
article.card {
  border-radius: 15px;
  overflow: visible;
  border: none;
}
.form-wrap {
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 15px;
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.logo {
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 24px;
  text-align: center;
}
.logo img {
  height: 100%;
  width: 100%;
}
.card-body.p-5 {
  padding-top: 2rem !important;
}
label,
.form-group {
  margin-bottom: 0.5rem;
}
</style>
