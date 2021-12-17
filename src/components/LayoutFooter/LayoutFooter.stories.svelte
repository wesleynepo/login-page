<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import LayoutFooter from "./LayoutFooter.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='LayoutFooter'
  component=LayoutFooter
/>

<Template let:args>
  <LayoutFooter
   {...args}
  />
</Template>

<Story
  name="Normal"
/>

