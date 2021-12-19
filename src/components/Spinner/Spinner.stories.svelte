<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Spinner from "./Spinner.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='Spinner'
  component=Spinner
/>

<Template let:args>
  <Spinner
   {...args}
  />
</Template>

<Story
  name="Normal"
/>

