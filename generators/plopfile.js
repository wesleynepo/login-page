module.exports = (plop) => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.svelte',
          templateFile: 'templates/Component.svelte.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.svelte',
          templateFile: 'templates/stories.svelte.hbs'
        },
      ]
    })
  }
  