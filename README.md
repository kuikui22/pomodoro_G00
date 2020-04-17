# gundam_pomodoro

* [demo](https://kuikui22.github.io/sideProject_demo/VueJs/pomodoro_G00/index.html)
    
## Directory Struct
```
.
|--node_modules
|--public                                   //靜態目錄
|--src                    
|   |--assets        
|   |   |--stylesheets                      //scss資源
|   |   |--images                           //圖片資源
|   |   |--voice                            //聲音資源
|   |                   
|   |--components
|   |   |--alertTipBox.vue                  //錯誤提示框
|   |   |--footer.vue                       //底部navbar
|   |   |--main.vue                         //主頁面顯示
|   |   |--timesUp.vue                      //時間結束提示畫面
|   |       
|   |--pages
|   |   |--createTask.vue                   //建立任務    
|   |   |--setTime.vue                      //設置定時器
|   |   |--taskCartㄡvue                    //任務使用統計表
|   |   |--taskList.vue                     //任務清單
|   |   
|   |--router                               //router目錄    
|   |   |--router.js                        
|   |               
|   |--services               
|   |    |--const.js                        //公用常量定義
|   |    |--extraFun.js                     //共用func定義
|   |               
|   |--store                                //vuex目錄
|   |   |--mutations.js
|   |   |--store.js
|   |        
|   |--App.vue                              //頁面入口文件
|   |--main.js                              //程序入口文件，加載各種公共组件
|   |--vue.config.js                        //wbpack設置    
|
.    
```

## v-charts    
參見網址: https://v-charts.js.org/#/start
Github: https://github.com/apertureless/vue-chartjs    
echarts文檔: https://www.echartsjs.com/zh/option.html#textStyle.color


## 新的學習        
* css
> * [translateX 至父層的左右100%](https://stackoverflow.com/questions/21557476/how-to-use-transformtranslatex-to-move-a-child-element-horizontally-100-across)
> * [範例](http://jsfiddle.net/Nprs7/)
> * [clip 實現進度條](https://segmentfault.com/a/1190000008959054)
> * [clip 改使用 clip-path](https://www.oxxostudio.tw/articles/201503/css-clip-path.html)

    
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

### Lints and fi    es files
```    
yarn lint    
```                
