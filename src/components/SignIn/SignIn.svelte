<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Checkbox from "../Checkbox/Checkbox.svelte";
    import Input from "../Input/Input.svelte";
import Spinner from "../Spinner/Spinner.svelte";

    let isLoading = false;

    const onSubmit = (event) => {
        isLoading = true;
    };
</script>

<div class="container">
    {#if isLoading}
        <Spinner />
    {:else}
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
        <form>
            <Input label="Login" required />
            <Input label="Password" type="password" required />
            <div class="options">
                <Checkbox label="Remember me" />
                <a href="/">Forgot password?</a>
            </div>
            <Button label="Login" onclick={onSubmit} />
        </form>
    {/if}
</div>

<style>
    h1 {
        font-size: 4rem;
    }

    .container {
        color: var(--theme-colors-text);
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 21.6rem;
        margin: auto;
    }

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    p {
        margin-bottom: 2.25rem;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: var(--theme-colors-text);
    }

    .options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1.5rem;
    }
</style>
