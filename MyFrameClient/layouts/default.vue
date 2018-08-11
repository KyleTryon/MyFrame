<template>
  <div id="layoutMain">
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
html {
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $color-text;
  height: 100%;
}
body, #__nuxt, #__layout, #layoutMain {
  height: 100%;
  background-color: $color-dark;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.commentAvatar {
          display: block;
          height: 1.25em;
          width: 1.25em;
          max-width: 1.25em;
          border-radius: 50%;
          background-color:$color-main;
          text-align: center;        
        }

.container {
  background-color: $color-dark;
}


</style>
