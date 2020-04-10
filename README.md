# gundam_pomodoro

## Directory Struct
```
.
|--node_modules
|--public                                   //靜態目錄
|--src
|   |--assets
|   |   |--stylesheets
|   |       |--stylesheets
|   |           |--_variables.scss          //scss公用變數
|   |           |--custom.scss              //引入bootstrap等所有scss
|   |           
|   |--components
|   |   |--footer.vue                       //底部navbar
|   |   
|   |--pages
|   |   |--createTask.vue                   //建立任務
|   |   |--setTime.vue                      //設置定時器
|   |   |--taskChart.vue                    //任務使用統計表
|   |   |--taskList.vue                     //任務清單
|   |   
|   |--router                               //router目錄
|   |   |--router.js                        
|   |   
|   |--store                                //vuex目錄
|   |   |--mutations.js
|   |   |--store.js
|   |
|   |--App.vue                              //頁面入口文件
|   |--main.js                              //程序入口文件，加載各種公共组件
|   |--vue.config.js                        //webpack設置
|
.
```

## v-charts
參見網址: https://v-charts.js.org/#/start
Github: https://github.com/apertureless/vue-chartjs
echarts文檔: https://www.echartsjs.com/zh/option.html#textStyle.color


# <font color="#ff0000"> TODO </font>
* 鈴聲提示
* 倒數計時動畫
* 圖表model用案需導入

## 新的學習
* css 的 transition
> https://stackoverflow.com/questions/21557476/how-to-use-transformtranslatex-to-move-a-child-element-horizontally-100-across
> http://jsfiddle.net/Nprs7/


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
