<template>
	<div class="c-social">           
        <div class="comment">
	            <a href="#comment-header" data-scroll>
	                <svg fill="#000000" height="52" viewBox="0 0 24 24" width="52" xmlns="http://www.w3.org/2000/svg">
	                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
	                    <path d="M0 0h24v24H0z" fill="none"/>
	                </svg>

	                (0)
	            </a>
	        </div>

	        <div class="like">
	            <a @click.once="incrementValue">
	                <svg fill="#000000" height="52" viewBox="0 0 24 24" width="52" xmlns="http://www.w3.org/2000/svg">
	                    <path d="M0 0h24v24H0z" fill="none"/>
	                    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
	                </svg>

	                ({{ counter }})
	            </a>
	        </div>


	    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
	
    export default {
    	data() {
            return {
                counter: 0,
            }
        },
    	computed: {
            ...mapGetters([
                'authenticated',
                'user'
            ])
        },
        methods: {
        	initSmoothScroll(){
                var scroll = new SmoothScroll('a[href*="#"]');
            },
            incrementValue(event) {
                event.preventDefault();
                // event.stopPropagation();
                if(!this.authenticated) {
                    router.push(`/login?redirect=${this.$route.path}`);
                } else {
                    // this.writingReview = true;
                	this.counter++;
                }
            },
        },
        mounted() {
            this.initSmoothScroll();
        }
    }
</script>