<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Input from "./Input.svelte";
</script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Login / Input"
  component={Input}
/>

<Template let:args>
  <Input
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

<Story
  name="Password"
  args={
    {
      label: 'Password',
      type: 'password'
    }
  }
/>
