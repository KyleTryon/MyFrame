<template>
  <nav class="navMain">
    <div class="" id="navLogo"></div>
    <div id="navUser">K</div>
  </nav>
</template>

<style lang="scss">
  .navMain {
    display: flex;
    width: 100%;
    height: 2.5em;
    background: $color-gradient;
    margin-bottom: 1em;
    align-items: center;

    #navLogo {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      line-height: 1.5em;
      border-radius:50%;
      background-color: $color-main;
      text-align: center;
      margin: 0px 0.5em;

    }

    #navUser {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      line-height: 1.5em;
      border-radius:50%;
      background-color: $color-main;
      text-align: center;
      margin: 0px 0.5em;

    }
  }
</style>
