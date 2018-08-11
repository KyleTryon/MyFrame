<template>
  <li :style="style" class="commentBlip" v-bind:class="{ blipOnTop: isOnTop, blipActive: isActive}" v-on:mouseover="isOnTop = true" v-on:mouseout="isOnTop = false" :title="message" >

  </li>
</template>

<style lang="scss">

  .blipActive {
    z-index: 101;
  }

    .blipOnTop {
    z-index: 100;
    box-shadow: 0px 0px 0.5em 0.15em $color-main;
  }

  .commentBlip {
        z-index: 2;
        display: inline-block;
        list-style-type: none;
        position: absolute;
        margin: 0;
        box-sizing: content-box;

        width: 0.5em;
        height: 0.5em;
        background-color: $color-accentDark;
        border-radius: 50%;

      }

</style>




<script>
export default {
  props: ['timestamp', 'message', 'commentLineWidth', 'commentID'],
  data: () => {
    return {
      isOnTop: false
    }
  },
  computed: {
    blipPosition () {
      return (this.commentLineWidth * (this.timestamp / this.$store.state.project.video.length));
    },
    style () {
      return 'transform: translate(' + this.blipPosition + 'px)';
    },
    isActive () {
      return this.$store.state.control.activeComment == this.commentID;
    }
  },
  methods: {

  }
}
</script>


