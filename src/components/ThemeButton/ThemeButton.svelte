<script lang="ts">
</script>

<button>
    <svg width="78" height="78" fill="none" xmlns="http://www.w3.org/2000/svg"
        ><g filter="url(#a)"><circle cx="39" cy="35" r="35" fill="#fff" /></g
        ><circle cx="39.5" cy="34.5" r="21.5" fill="#2D2D2D" /><path
            d="M56 34.5C56 43.613 48.389 51 39 51V18c9.389 0 17 7.387 17 16.5Z"
            fill="#fff"
        /><defs
            ><filter
                id="a"
                x="0"
                y="0"
                width="78"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
                ><feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                /><feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                /><feOffset dy="4" /><feGaussianBlur
                    stdDeviation="2"
                /><feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                /><feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                /><feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                /></filter
            ></defs
        ></svg
    >
</button>

<style>
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 5rem;
        height: 5rem;
    }

    button:hover,
    button:focus {
        background: transparent;
        transform: scale(1.05);
    }
</style>
