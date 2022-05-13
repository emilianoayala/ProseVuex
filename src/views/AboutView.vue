<template>
	<div class="about">
		<b-card no-body class="mb-3">
			<b-card-header header-tag="header" class="p-1" role="tab">
				<b-img
					@click="showModal('Director')"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMrCLeE3XV7yGvLDdvP7Wm0aKLDvOA6RI7iYzLAXpKdZvdK18DF1KU-iIZFoABHXgMPY&usqp=CAU"
					alt="Image"
				></b-img>

				<b-img
					@click="showModal('Desarrollador')"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnO0ZT4M-VWBXxPUU9HapSteJKZv6S0YM52qPF7tVZZrTYd9Uy-NkQQF3JlLsxejU2ek&usqp=CAU"
					alt="Image2"
				></b-img>

				<b-img
					@click="showModal('RRHH')"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbT1IEPObp8wU4WvWCO7dD8wUsjZEK_WhcFYcCpxxOxoUKxdc-bekVa3XJoMPtpN2DZA&usqp=CAU"
					alt="Image3"
				></b-img>

				<b-modal ref="modal" size="sm" title="Ocupación">{{
					data
				}}</b-modal>
			</b-card-header>
		</b-card>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			data: 'data',
		};
	},
	methods: {
		showModal(ocupacion) {
			this.$refs['modal'].show();
			this.data = ocupacion;
		},

		hideModal() {
			this.$refs['modal'].hide();
		},
	},
};
</script>

<style scoped>
.p-1 {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;
	gap: 20px;
	margin-top: 10px;
	margin-bottom: 20px;
	padding: 20px;
}
</style>
