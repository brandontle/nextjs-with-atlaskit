# NextJs with AtlasKit
This is a fork of [Next.js TypeScript Starter Kit](https://github.com/deptno/next.js-typescript-starter-kit) in an attempt to get AtlasKit Editor running with Next JS.

The relevant file is Home.tsx, where Editor is imported from the @atlaskit/editor-core package.

Currently, when attempting to run, the following error throws:

```sh
SyntaxError: Unexpected token export...
...
/Users/user/repos/nextjs-with-atlaskit/node_modules/@atlaskit/editor-core/index.js:2
export { name, version } from './version-wrapper';
```

## Installation

```sh
git clone https://github.com/brandontle/nextjs-with-atlaskit
cd nextjs-with-atlaskit
yarn
```

### :rocket: Run Development

```bash
yarn start:dev # run
```
