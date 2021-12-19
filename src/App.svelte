<script lang="ts">
	import { ThemeWrapper } from "svelte-themer";
	import LayoutFooter from "./components/LayoutFooter/LayoutFooter.svelte";
	import SignIn from "./components/SignIn/SignIn.svelte";
	import { themes } from "./style/theme";
</script>

<ThemeWrapper key="theme-choose" {themes}>
	<main>
		<div>
			<SignIn />
			<LayoutFooter />
		</div>
	</main>
</ThemeWrapper>

<style>
	main {
		text-align: center;
		background-color: var(--theme-colors-background);
		color: var(--theme-colors-text);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
</style>
