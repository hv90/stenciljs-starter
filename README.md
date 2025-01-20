# stenciljs-starter

## Aim:
It allows for library generation starter based on web-components with Stencil JS library

### Steps

#### Generate your own custom library
0. Clone/download this repo
1. At the root of this project, install default dependencies with `yarn` or `npm i`
2. You can add new dependencies as well
3. `yarn generate` will start a prompt to create your own components
4. 
  - run `yarn start` if you want to test your components in this vanilla js
  - run `yarn build + yarn pack` if you're ready to generate your own library

#### Make use of your own library:
1. You can copy the generated *npm package* and paste it at the root of another project
2. Run (`npm i ./` || `yarn add ./`) + *name of the generated package* to install it

##### Vanilla js (requires bundler)
1. In your javascript file, put at the top of the document `import custom-lib-name`
2. In your html file use your web-component tags like: 
  ```
    ...
    <body>
      <my-custom-component></my-custom-component>
    </body>
  ```

##### React js
1. At the topmost of your React component, like *App.tsx* import at the top of the document: `import { defineCustomElements } from "custom-lib-name/loader";`
2. In the same file add inside the declaration component, before the JSX return, the following: `defineCustomElements(window);`
3. Now you're good to add your own web-components without need to import them

### Dealing with Typescript (React):
1. If you're about to use react, for example, inside **src** folder create some *.d.ts* file like *types/index.d.ts*
2. Put the code below inside your *.d.ts* file 
  ```
    import { JSX as StencilJSX } from 'name-of-your-library/stencil-components';

    declare module "react" {
      export namespace JSX {
        type StencilIntrinsicElements = {
          [K in keyof StencilJSX.IntrinsicElements]: StencilJSX.IntrinsicElements[K] & {
            children?: React.ReactNode;
          };
        };

        interface IntrinsicElements extends StencilIntrinsicElements {}
      }
    }
  ```
3. Reference the path to this type declaration in tsconfig.json. Inside compileOptions put `"types": ["./path/to/index.d.ts"]`

