<script lang="ts">
	import LayoutFooter from "./components/LayoutFooter/LayoutFooter.svelte";
	import SignIn from "./components/SignIn/SignIn.svelte";
</script>

<main>
	<div>
		<SignIn />
		<LayoutFooter />
	</div>
</main>

<style>
	main {
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	div {
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
</style>
