<template>
  <div class="login">
    <h1 class="login__title">
      <div class="login__logo"></div>
      <div class="login__words">Login</div>
    </h1>
    <div class="login__body">
      <div class="inputWrapper">
        <div class="inputWrapper__row">
          <div class="input">
            <div class="input__label">Comapny ID</div>
            <div class="input__input">
              <input type="text" class="input__inputBox"/>
            </div>
          </div>    
        </div>
        <div class="inputWrapper__row">
          <div class="input">
            <div class="input__label">Username</div>
            <div class="input__input">
              <input type="text" class="input__inputBox"/>
            </div>
          </div>
        </div>
        <div class="inputWrapper__row">
          <div class="input">
            <div class="input__label">Password</div>
            <div class="input__input">
              <input type="text" class="input__inputBox"/>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'backendLogin'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables.scss';

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30vw;
  border: 2px solid $primary;
  border-radius: 4px;
  -webkit-box-shadow: 10px 15px 12px -7px rgba($color: $primary, $alpha: .3);
  -moz-box-shadow: 10px 15px 12px -7px rgba($color: $primary, $alpha: .3);
  box-shadow: 10px 15px 12px -7px rgba($color: $primary, $alpha: .3);
  transform: translate(-50%, -50%);
  padding: 16px 24px;
  &__title {
    display: flex;
    align-items: center;   
    color: $primary;
  }
  &__logo {
    width: 82px;
    height: 20px;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/logo_lasso_word@3x.png);
  }
  &__words {
    font-size: 20px;
    margin-left: auto;
    letter-spacing: 3px;
    font-weight: 300;
  }
  &__body {
    margin-top: 24px;
  }
}

</style>