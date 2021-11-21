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
        width: 18.75rem;
        border-radius: 0.625rem;
        border: none;
        padding: 0 1.125rem;
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