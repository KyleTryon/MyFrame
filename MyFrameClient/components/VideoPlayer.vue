<template>
  <figure class="videoContainer">
          <video id="videoPlayer" ref="videoPlayer" controls preload="metadata" poster="img/poster.jpg" @timeupdate="getCurrentTime()" >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/> 
          </video>
          <figure class="commentTimeLine" id="commentTimeLine" ref="commentLine">
            <ul>
              <li id="timelineScrubber" :style="style"></li>
              <app-comment-blip v-for="comment in $store.state.project.comments" :key="comment.id" :commentID="comment.id" :timestamp="comment.timestamp" :message="comment.message" :commentLineWidth=commentLineWidth />

            </ul>
          </figure>
        </figure>
</template>

<style lang="scss">
.videoContainer {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
}

#videoPlayer {
      max-width: 100%;
      width: 100%;
      height: auto;
}

.commentTimeLine {
  width: 100%;
  height: 2.5em;
  background-color: $color-light;
  padding: 0px 19px;

    ul {
      list-style-type: none;
      display: flex;
      width: 100%;
      align-items: center;
      box-sizing: border-box;
      height: 100%;
      margin: auto;
      padding: 0px;

      #timelineScrubber {
        display: inline-block;
        list-style-type: none;
        position: absolute;
        margin: 0;
        box-sizing: content-box;

        width: 0.1em;
        height: 2em;
        background-color: $color-red;

      }
      
    }

}

</style>

<script>
import AppCommentBlip from '~/components/CommentBlip.vue';

export default {
  components: {
    AppCommentBlip
  },
  data: function () {
    return {
      commentLineWidth: '0',
      currentTime: 0
    }
  },
  mounted () {
    this.commentLineWidth = this.$el.clientWidth - 40;
    },
  methods: {
    getCurrentTime () {
      this.currentTime = this.$refs.videoPlayer.currentTime;
    }
  },
  computed: {
    scrubberPosition () {
      return (this.commentLineWidth * (this.currentTime / this.$store.state.project.video.length));
    },
    style () {
      return 'transform: translate(' + this.scrubberPosition + 'px)';
    },
  }
}
</script>
