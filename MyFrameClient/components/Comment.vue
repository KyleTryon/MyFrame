<template>
  <figure class="commentContainer">
    <section class="commentHeader">
      <span class="commentAvatar">K</span>
      <span class="commentName">Kyle T</span>
      <span class="commentStatus"></span>
    </section>
    <section class="commentBody">
      <p class="commentContent">
        {{message}}
      </p>
    </section>
    <section class="commentFooter">
    </section>
  </figure>
</template>

<script>
export default {
  props:['message']
}
</script>


<style lang='scss'>

  .commentContainer {
    background-color: $color-light;
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin-bottom: 0.3em;
    border-radius: $border-radius;

    .commentHeader {
      display: flex;
      justify-content: space-between;
      color: $color-white;

        .commentStatus {
          display: block;
          height: 0.5em;
          width: 0.5em;
          max-width: 0.5em;
          border-radius: 50%;
          background-color:$color-main;
        }
    }
    .commentBody {
      .commentContent {
        padding: 0.5em;
        text-indent: 0.5em;
      }
    }
  }

</style>

