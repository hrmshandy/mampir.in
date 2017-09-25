<template>
    <div class="o-section claim-merchant">
        <div class="o-container">

            <h2 class="o-heading o-heading--mg2 u-text-center">
                Klaim Tempat Bisnis Anda
                <small>
                	untuk mendapatkan akses ke alat analytical
                </small>
            </h2>

			<search-form :custom-submit="true" @submit="onSearchSubmit">
				<template scope="button">
					<button :class="button.classes" type="submit">
						<i class="fa fa-search" aria-hidden="true"></i> Cari
					</button>
				</template>
			</search-form>
			
			<div v-if="searching" class="c-result u-text-center">
				<h4>Anda mencari <b>"{{ query.keyword }}"</b> di <b>" {{ query.city }}"</b></h4>
				<h4 v-if="results.length > 0">Menampilkan 5 dari {{ results.length }} hasil pencarian</h4>
			</div>
			<div v-if="loading" class="u-text-center">Please Wait...</div>
			<template v-for="result in pagesData">
				<Result :data="result" :key="result.id"></Result>
			</template>
			<div class="u-text-center" v-if="(results.length > 0) && (pages > 1)">
				<ul class="pagination">
					<li>
						<a href="#" @click.prevent="goToPrevPage" :disabled="isFirstPage">
							<i class="fa fa-angle-left"></i>
						</a>
					</li>
					<li v-for="page in pages">
						<a href="#" @click.prevent="goToPage(page)" :class="{'is-current': currentPage == page}">{{ page }}</a>
					</li>
					<li>
						<a href="#" @click.prevent="goToNextPage" :disabled="isLastPage">
							<i class="fa fa-angle-right"></i>
						</a>
					</li>
				</ul>
			</div>
			<div v-if="searching" class="c-result__notfound u-text-center">
				<h2>Tidak dapat menemukan Merchant anda?</h2>
				<p>isi form dibawah untuk membuat listing di Mampir.in</p>
				<router-link to="/merchant/registration/1" class="o-button o-button--primary o-button--mincontent o-button--large">Tambah Merchant</router-link>
			</div>
        </div>
    </div>
</template>

<script>
    import SearchForm from '../../components/Search.vue'
	import Result from '../../components/ResultItem.vue'

	export default {
        components: { Result, SearchForm },
		data() {
          return {
              query: {},
			  results: [],
              searching: false,
              currentPage: 1,
              perPage: 5,
			  loading: false
		  }
		},
		computed: {
          	pages() {
              return Math.ceil(this.results.length / this.perPage);
		  	},
			pageStart() {
                return (this.currentPage-1) * this.perPage;
			},
			pageEnd() {
          	    return this.currentPage*this.perPage;
			},
			pagesData() {
          	    let data = this.results.slice(0);
              	return data.slice(this.pageStart, this.pageEnd);
			},
			isFirstPage() {
          	    return this.currentPage === 1;
			},
			isLastPage() {
          	    return this.currentPage === this.pages;
			}
		},
		methods: {
            onSearchSubmit(query, queryObject, e) {
                e.preventDefault();

                this.query = queryObject;
                this.searching = true;
                this.loading = true;

                this.makeRequest('/api/search/google-places/text', {query}).then(data => {
                    this.results = data.data;
                    this.loading = false;
                }).catch(() => {
                    this.loading = false;
				});
			},
            goToPage(page) {
                this.currentPage = page;
			},
            goToPrevPage() {
                this.currentPage--;
			},
            goToNextPage() {
                this.currentPage++;
			}
		}
    }
</script>

<style lang="scss">
	.claim-merchant {
		min-height: calc(100vh - 60px);
		.c-search__form {
			> .c-form-group {
				margin-left: 30px;
				&:first-child, &:nth-child(2) {
					width: 100%;
				}
				&:nth-child(3) {
					width: 150px;
					flex: 0 0 auto;
				}
			}
		}

		.pagination {
			display: inline-flex;
			list-style: none;
			margin-top: 30px;
			> li {
				> a {
					padding: 6px 12px;
					display: inline-block;
					width: 36px;
					height: 36px;
					&.is-current {
						pointer-events: none;
						background: #7b4925;
						color: #fff;
						border-radius: 100%;
					}
					&[disabled] {
						pointer-events: none;
						opacity: 0.6;
					}
				}
			}
		}
	}
</style>