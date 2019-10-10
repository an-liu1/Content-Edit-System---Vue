# Content-Edit-System---Vue

## Project
This is the content edit system designed by Vue.js. The purpose of starting this project is to quickly build the website through editing web content on the admin page. We designed a specific database structure to identity different section of this website with multiple contents. The admin page is to do CRUD(create, read, update, delete) job to manage web content. Once there is any change in the backend system, it will render to the landing page immediately.

## Project setup
```
npm install
```

build a file name .eslintrc.js, and input the code below in it
```
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

```
### Compiles and hot-reloads for development
```
npm run serve
```
## Login auth
username: admin@somoplay.com

password: 111111
