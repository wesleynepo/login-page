<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Checkbox from "./Checkbox.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='Checkbox'
  component=Checkbox
/>

<Template let:args>
  <Checkbox
   {...args}
  />
</Template>

<Story
  name="Normal"
/>

