<template>
    <li @click='onClick' class='list-group-item'>
        <div class='video-list media'>
            <div class='media-left'>
                <img class='media-object' :src='imageUrl' />
            </div>
            <div class='media-body'>
                <div class='media-heading'>{{title}}</div>
            </div>
        </div>

    </li>
</template>
<script>
    export default {
        props: {
            onVideoSelect: {
                type: Function,
                required: true
            },
            video: {
                type: Object,
                required: true
            }
        },

        computed: {
            imageUrl () {
                return this.video.snippet.thumbnails.default.url
            },

            title () {
                return this.video.snippet.title
            }
        },

        methods: {
            onClick () {
                this.onVideoSelect (this.video)
            }
        }
    }
</script>
<style>
    .list-group-item {
        cursor: pointer;
    }

    .list-group-item:hover {
        background-color: #eee;
    }
</style>
