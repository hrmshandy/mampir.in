<template>
	<div>
		<section class="hero">
			<div class="container">
				<div class="row middle hero__row">
					<div class="col-sm-7 hero__col">
						<img src="/img/hero-iconic.png" alt="Mampir.in" class="img-fluid hero__img">
					</div>
					<div class="col-sm-5 hero__col">
						<h1 class="hero__title">Bahagia Itu Dekat</h1>
						<h3 class="hero__subtitle">Yuk, <strong>Mampir.in!</strong></h3>
						<search-form size="lg"></search-form>
					</div>
				</div>
			</div>
		</section>
		<div class="section section--gray">
			<div class="p-home__categories">
				<div class="row">
					<div v-for="category in categories" class="col-6 col-sm-3">
						<router-link class="o-category-card" :to="'/search?categories='+category" :style="{ backgroundImage: 'url(/img/categories/'+category+'.png)' }">
							<div class="o-category-card__body">
								<img :src="'/img/categories/'+category+'-icon.png'" alt="">
								<span>{{ category | capitalize }}</span>
							</div>
						</router-link>
					</div>
					<div class="col-6 col-sm-3">
						<router-link class="o-category-card" to="#">
							<div class="o-category-card__body">
								<span>Lainnya</span>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- <section class="section section--gray what-happened">
			<div class="container-fluid">
				<h1 class="section__title">Apa Yang Terjadi ?</h1>
				<masonry class="grid-5">
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/01.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="review-card">
						  	<div class="card-header">
							    <div class="venue-block">
							    	<img src="/img/avatar/venue/01.jpg" alt="" class="venue-block__pic">
							    	<span class="venue-block__name">Bonafide Restaurant logo</span>
							    </div>
						  	</div>
						  	<div class="card-block">
							    <p>
							    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui sapien, vestibulum nec est luctus, aliquet commodo ante.
							    </p>
						  	</div>
						  	<div class="card-footer text-muted">
								<div class="user-block">
									<img src="/img/avatar/user/01.jpg" alt="" class="user-block__pic">
									<div class="user-block__info">
										<span class="user-block__name">Darwis Boqin</span>
										<span class="user-block__status">60 Ulasan . 123 Pengikut</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/02.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="review-card">
						  	<div class="card-header">
							    <div class="venue-block">
							    	<img src="/img/avatar/venue/01.jpg" alt="" class="venue-block__pic">
							    	<span class="venue-block__name">Bonafide Restaurant logo</span>
							    </div>
						  	</div>
						  	<div class="card-block">
						  		<img src="/img/contents/01.jpg" alt="">
							    <p>
							    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui sapien, vestibulum nec est luctus, aliquet commodo
							    </p>
						  	</div>
						  	<div class="card-footer text-muted">
								<div class="user-block">
									<img src="/img/avatar/user/01.jpg" alt="" class="user-block__pic">
									<div class="user-block__info">
										<span class="user-block__name">Darwis Boqin</span>
										<span class="user-block__status">60 Ulasan . 123 Pengikut</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/02.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/03.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/04.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/04.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
					<div class="col">
						<div class="post-card">
						  	<img class="card-img-top" src="/img/posts/04.jpg" alt="Card image cap">
						  	<div class="card-block">
							    <a href="#" class="card-title">10 Tempat Liburan di jakarta dengan budget 500ribu!</a>
						  	</div>
						</div>
					</div>
				</masonry>
			</div>
		</section>
		<section class="section recomended-places">
			<h1 class="section__title">Tempat Yang Wajib Kamu Mampir.in</h1>
			<p class="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium est at metus rutrum, at tincidunt sem maximus. Donec iaculis commodo ligula ut laoreet.</p>
			<div class="post-grid">
				<div class="post-item" v-for="n in 8">
					<div class="post__body">
						<img src="/img/posts/05.jpg" alt="" class="post__img">
						<div class="post__overlay">
							<h3 class="post__title">7 Pulau Paling Indah Di Indonesia</h3>
							<a href="#" class="btn btn-primary post__link">Lihat Selengkapnya</a>
						</div>
					</div>
				</div>
			</div>
		</section> -->
		<section class="section why">
			<h1 class="section__title">Kenapa Harus Mampir.in</h1>
			<!-- <p class="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium est at metus rutrum, at tincidunt sem maximus. Donec iaculis commodo ligula ut laoreet.</p> -->
			<div class="why-mampir-in row">
				<div class="col-md-4">
					<img src="/img/icon-01.png" alt="">
					<h3>Otak Jiwa Dan Raga</h3>
					<span>Butuh yang namanya refreshing</span>
				</div>
				<div class="col-md-4">
					<img src="/img/icon-02.png" alt="">
					<h3>Jodoh Tak Kunjung Mampir</h3>
					<span>Makanya kamu yang harus Mampir.in</span>
				</div>
				<div class="col-md-4">
					<img src="/img/icon-03.png" alt="">
					<h3>Silaturahmi</h3>
					<span>Biar rejekinya lancar. Amin</span>
				</div>
			</div>
		</section>
		<footer>
			<div class="footer-center">
				<img src="/img/logo-footer.png" alt="">
				<p>&copy; Copyright 2017 Mampir.in. All Right Reserved</p>
				<ul class="social-icons">
					<li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Masonry from '../components/Masonry.vue'
import SearchForm from '../components/SearchForm.vue'

export default {
	components: { Masonry, SearchForm },
	data() {
		return {
			query: {
				keyword: null,
				location: null
			},
			categories: [
			    'kuliner', 'relaksasi', 'rekreasi', 'hiburan', 'salon', 'barbershop', 'olahraga'
			]
		}
	},
	methods: {
	},
	mounted() {
		const hero = document.querySelector('.hero');

		const setFitHeight = () => {
			let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			hero.style.height = `${height}px`;
		}

		setFitHeight();

		window.addEventListener('resize', () => {
			setFitHeight();
		});
	}
}
</script>
