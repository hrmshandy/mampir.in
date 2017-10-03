<template>
	<div class="c-result__item">
		<div class="c-result__item__img">
			<img :src="data.cover" alt="merchant picture">
		</div>
		<div class="c-result__item__desc">
			<h4>{{ data.name }}</h4>
			<p>{{ data.short_address }}</p>
		</div>
		<button type="button" @click="claim" class="o-button o-button--primary o-button--block" :disabled="loading">
			<span v-if="loading"><loading color="#fff"></loading> Loading...</span>
			<span v-else>Klaim Merchant ini</span>
		</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
	    props: {
	        data: {type: Object, required: true}
		},
		data() {
	      return {
	          loading: false
		  }
		},
		methods: {
	        claim() {
				this.loading = true;
                axios.get(`/api/venue/g/${this.data.id}`).then(({data}) => {
                    this.setMerchant(data);

                    this.loading = false;

                    router.push('/merchant/registration/1');
                }).catch(() => {
                    console.error('claim error');
                    this.loading = false;
                    //router.push('/404');
                });
			},
			...mapActions([
			  'setMerchant'
			])
		}
	}
</script>