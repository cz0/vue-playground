<template>
    <div v-if='!video'>
        <loader />
    </div>
    <div class='video-detail col-md-8' v-else>
        <div class='embed-responsive embed-responsive-16by9'>
            <iframe class='embed-responsive-item' :src='url'></iframe>
        </div>
        <div class='details'>
            <div>{{video.snippet.title}}</div>
            <div>{{video.snippet.description}}</div>
        </div>
    </div>
</template>
<script>
    import Loader from './Loader.vue'

    export default {
        props: {
            video: {
                type: Object,
                required: true
            }
        },

        computed: {
            url () {
                if (!this.video) return

                const videoId = this.video.id.videoId
                return `https://www.youtube.com/embed/${videoId}`
            }
        },

        components: {
            Loader
        }
    }
</script>
<style>
    .video-detail .details {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
