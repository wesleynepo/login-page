<script lang="ts">
    export let label: string;
    export let type: string = 'text';
</script>

<input placeholder={label} type={type} />


<style>
    input {
        color: white;
        background-color: #224957;
        height: 2.8125rem;
        width: 100%;
        max-width: 16.525rem;
        border-radius: 0.625rem;
        border: none;
        padding: 0 1.125rem;
        margin-bottom: 2rem;
    }

    input:focus {
        outline: none;

    }

    ::placeholder {
        color: white;
        font-size: 1rem;
        font-weight: bold;        
    }
</style>