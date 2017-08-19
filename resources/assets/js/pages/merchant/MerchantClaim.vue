<template>
    <div class="o-section">
        <div class="o-container">

            <h2 class="o-heading o-heading--mg2 u-text-center">
                Klaim Tempat Bisnis Anda
                <small>
                	untuk mendapatkan akses ke alat analytical
                </small>
            </h2>
            
			<form action="">
				<div class="c-form-group o-grid">
					<div class="o-grid__col u-5/12@lg">
						<div class="c-form-group c-form-group--addon">
							<span class="o-input o-input--addon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
							<input type="text" placeholder="Lokasi" class="o-input">
						</div>
					</div>
					<div class="o-grid__col u-5/12@lg">
						<input type="text" placeholder="Nama Tempat" class="o-input">
					</div>
					<div class="o-grid__col u-2/12@lg">
						<button class="o-button o-button--primary o-button--block"><i class="fa fa-search" aria-hidden="true"></i> Cari</button>
					</div>
				</div>
			</form>
			
			<div class="c-result u-text-center">
				<h4>Anda mencari <b>"Warung Abah"</b> di <b>"Bandung"</b></h4>
				<h4>Menampilkan 5 dari 653 hasil pencarian</h4>
			</div>
			
			<Result></Result>
			<Result></Result>
			<Result></Result>

			<div class="c-result__notfound u-text-center">
				<h2>Tidak dapat menemukan Merchant anda?</h2>
				<p>isi form dibawah untuk membuat listing di Mampir.in</p>
				<router-link to="/merchant/registration/1" class="o-button o-button--primary o-button--mincontent o-button--large">Tambah Merchant</router-link>
			</div>

        </div>
    </div>
</template>

<script>
	import Result from '../../components/ResultItem.vue'
	export default {
        components: { Result }
    }
</script>