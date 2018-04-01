<template>
    <ul class='col-md-4 list-group'>
        <video-list-item v-for='video in videos'
                :video='video'
                :onVideoSelect='onVideoSelect'
        />
    </ul>
</template>
<script>
    import VideoListItem from './VideoListItem.vue'

    export default {
        props: {
            onVideoSelect: {
                type: Function,
                required: true
            },
            videos: {
                type: Array,
                required: true
            }
        },

        components: {
            VideoListItem
        }
    }
</script>
