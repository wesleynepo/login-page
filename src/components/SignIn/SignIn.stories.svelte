<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import SignIn from "./SignIn.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title='SignIn'
  component=SignIn
/>

<Template let:args>
  <SignIn
   {...args}
  />
</Template>

<Story
  name="Normal"
/>

