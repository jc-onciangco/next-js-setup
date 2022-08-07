function plopFile(plop) {
  /**@type {import('plop').NodePlopAPI} */
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'Type of component:',
        choices: ['App', 'UI'],
      },
      {
        when(context) {
          return context.name.includes('App');
        },
        message: 'Name of your app component(ex. button-cancel)?',
        type: 'input',
        name: 'app',
      },
      {
        when(context) {
          return context.name.includes('UI');
        },
        message: 'Name of your UI component(ex. base-button)?',
        type: 'input',
        name: 'ui',
      },
    ], // array of inquirer prompts
    actions: function (data) {
      var actions = [];

      if (data.app) {
        actions = [
          {
            type: 'add',
            path: 'src/components/app/{{pascalCase app}}/{{pascalCase app}}.tsx',
            templateFile: 'templates/appBaseComponent.template.hbs',
          },
          {
            type: 'add',
            path: 'src/components/app/{{pascalCase app}}/{{pascalCase app}}.module.scss',
            templateFile: 'templates/appStyles.template.hbs',
          },
        ];
      } else {
        actions = [
          {
            type: 'add',
            path: 'src/components/ui/{{pascalCase ui}}/{{pascalCase ui}}.tsx',
            templateFile: 'templates/uiBaseComponent.template.hbs',
          },
          {
            type: 'add',
            path: 'src/components/ui/{{pascalCase ui}}/{{pascalCase ui}}.module.scss',
            templateFile: 'templates/uiStyles.template.hbs',
          },
        ];
      }

      return actions;
    }, // array of actions
  });
}

export default plopFile;
