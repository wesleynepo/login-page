<script lang="ts">
    export let label:string;
</script>

<button>
    <span>
        {label}
    </span>
</button>


<style>
    button {
        background-color: #20DF7F;
        border-radius: 0.625rem;
        width: 18.75rem;
        height: 2.813rem;
        border-width: 0;
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
    }

    span {
        line-height: 1rem;
        color:#224957;
        font-size: 1rem;
        font-weight: bold;
    }
</style>