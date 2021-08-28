
Можете поиграть в эту игру тут: 
https://zarinamambetova.github.io/game_on_vue.js-remember/index.html

# game-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Как развернуть на gh-pages:

1. Создаем ветку gh-pages и переходим в неё
git checkout -b gh-pages

2. Создаем vue.config.js и прописываем в нем:
module.exports = {
publicPath: '/название репо/'
}

3. В .gitignore закомментить строку '/ dist'

4. npm run build

5. git add dist && git commit -m "Initial dist subtree commit"

6. git subtree push --prefix dist origin gh-pages

7. Настроить gh-pages на github
