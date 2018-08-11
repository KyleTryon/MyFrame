<template>
  <div class="reviewContainer">
    <app-nav></app-nav>
    <section class="container">
    <section class="reviewPanel">
      <section class="videoPanel">
        
        <app-video-player/>

      </section>
      <section class="newCommentPanel">
        <section class="commentHeader">
          <span class="commentAvatar">K</span>
          <span class="commentName">Kyle T</span>
        </section>
        <textarea name="newCommentBody" id="newCommentBody"></textarea>
      </section>
    </section>
    <section class="commentsPanel">
      <app-comment v-for="comment in $store.state.project.comments" :key="comment.id" :message="comment.message"/>

    </section>
  </section>
  </div>
  
</template>

<script>
import AppComment from '~/components/Comment.vue';
import AppVideoPlayer from '~/components/VideoPlayer.vue';
import AppNav from '~/components/TopNav.vue';

export default {
  components: {
    AppComment,
    AppVideoPlayer,
    AppNav
  },
  data: () => {
    return {
      data: {
        video: {
          url: "",
          length: 596, /* in seconds */
        },
        comments: {
          0: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "1", /* in seconds */
          },
          1: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "5", /* in seconds */
          },
          2: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "6", /* in seconds */
          },
          3: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "7", /* in seconds */
          },
          4: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "20", /* in seconds */
          },
          5: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "50", /* in seconds */
          },
          6: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "55", /* in seconds */
          },
          7: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "60", /* in seconds */
          },
          8: {
            message: "Good work! I like this part. Make it more actionable!",
            author: "Kyle T",
            timestamp: "62", /* in seconds */
          },
        }
      }
    }
  }
}
</script>


<style lang="scss">

.reviewContainer {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-columns: 70% auto;
  grid-gap: 1em;
  flex: 1;
}

.videoPanel {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.commentsPanel {
  overflow-y: scroll;
  padding-right:1em;
}

.commentsPanel::-webkit-scrollbar {
    width: 10px;
}
 
.commentsPanel::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
.commentsPanel::-webkit-scrollbar-thumb {
  background-color: $color-main;
  outline: 1px solid $color-accent;
  height: 1em;
  width: 10px;
}

.reviewPanel {
  display: flex;
  flex-direction: column;
  margin-left: 1em;


    .newCommentPanel {
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      height: 10em;
      background-color: $color-light;
      border-radius: 0.1em;
      margin-bottom: 1em;
      padding: 0.5em;
      width: 100%;

        .commentHeader {
          display: flex;
          color: $color-white;
          padding: 1em;

            .commentName{
              margin-left: 1em;
            }
        }

        #newCommentBody {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: none;
          color: $color-text;
          font-size: 1em;
        }
    }
}

</style>
