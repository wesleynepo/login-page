<script lang="ts">
    export let label: string;
</script>

<label>
    <input type="checkbox" name="checkbox">
    {label}
</label>

<style>
    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #224957;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        border-width: 0;
        display: grid;
        place-content: center;                
        margin-right: 0.5rem;
    }

    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #20DF7F;
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    label {
        display: flex;
        flex-direction: row;
    }
</style>