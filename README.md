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


# <font color="#ff0000"> TODO </font>
* 任務列表
    * 刪除 b-icon-trash
    * 上方日期顯示
    * 點選任務箭頭時跳至時間計時頁
* 新增任務
* 任務圖表
* 鈴聲提示
* 倒數計時動畫
* 倒數計時頁面


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
