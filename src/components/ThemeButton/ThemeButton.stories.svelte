<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import ThemeButton from "./ThemeButton.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='ThemeButton'
  component=ThemeButton
/>

<Template let:args>
  <ThemeButton
   {...args}
  />
</Template>

<Story
  name="Normal"
/>

