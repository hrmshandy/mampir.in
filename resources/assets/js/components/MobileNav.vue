<template>
	<header>
		<div class="mobile-nav">
			<ul class="mobile-nav__body">
				<li>
					<router-link to="/">M</router-link>
				</li>
				<li>
					<router-link to="#journal">M</router-link>
				</li>
				<li>
					<router-link to="/">
                        <logo-mobile class="o-logo__mobile"></logo-mobile>
                    </router-link>
				</li>
				<li>
					<router-link to="#search">M</router-link>
				</li>
				<li>
					<a href="#" @click.prevent="openLogin">M</a>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
import LogoMobile from '../components/LogoMobile.vue'
export default {
	components: { LogoMobile },
    methods: {
        openLogin(e) {
            Event.fire('show-login-modal', e);
        }
    }
}
</script>