<template>
	<div class="d-flex justify-center align-center py-16">
		<span class="text-h1">{{ value }}</span>
		<add-btn @click="add()" />
	</div>
</template>

<script>
export default {
	data: () => ({
		value: 0,
	}),
	methods: {
		add() {
			this.value++
		},
	},
}
</script>
