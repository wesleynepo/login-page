<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "./Button.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='Button'
  component=Button
/>

<Template let:args>
  <Button
   {...args}
  />
</Template>

<Story
  name="Normal"
  args={
    {
      label: 'Login'
    }
  }
/>

