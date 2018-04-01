<template>
    <div>
        <search-bar :onSearchTermChange='videoSearch' />
        <video-detail :video='selectedVideo' />
        <video-list
                :onVideoSelect='setSelectedVideo'
                :videos='videos' />
    </div>
</template>
<script>
    import YoutubeSearch from 'youtube-api-search'
    import debounce from 'lodash.debounce'

    import SearchBar from './SearchBar.vue'
    import VideoDetail from './VideoDetail.vue'
    import VideoList from './VideoList.vue'

    import config from '../config'

    export default {
        mounted () {
            this.videoSearch ('golf')
            this.videoSearch = debounce (this.videoSearch, 300)
        },

        methods: {
            videoSearch (term) {
                YoutubeSearch ({ key: config.apiKey, term }, videos => {
                        this.videos = videos
                        this.selectedVideo = videos[0]
                    }
                )
            },

            setSelectedVideo (selectedVideo) {
                this.selectedVideo = selectedVideo
            }
        },

        components: {
            SearchBar,
            VideoDetail,
            VideoList
        },

        data () {
            return {
                videos: [],
                selectedVideo: null
            }
        }
    }
</script>
