DAY1-PM 5：00
    头部写完了，遇到的问题：
        使用float时候需要用margin来调位置，页面的宽度会影响内部布局
    之后的问题：
    淡入淡出轮播图和左侧菜单栏没有思路写
    
DAY2-PM 5:00
    首页静态还剩二级菜单没有写，遇到的问题：
         头部滑动定位有问题
     之后的问题：
        没
  
DAY3-PM 5:00
    关于DAY2的遇到的头部滑动定位问题以解决：
    在头部背后添加一个空白的div撑开高度
    
    完成了首页静态页面和第二页2/3静态
    遇到的问题：
        二级菜单的实现;
        给二级菜单的ul设置 display:none。
        
       $(function () {
               $('.banner-list>li').hover(function () {
                   $(this).addClass('on')
                   $(this).find('ul').css({display: 'block'})
                   $(this).find('.icon').css({display: 'block'})
                   $(this).find('.right_icon').css({display: 'none'})
       
               }, function () {
                   $(this).removeClass('on')
                   $(this).find('ul').css({display: 'none '})
                   $(this).find('.icon').css({display: 'none'})
                   $(this).find('.right_icon').css({display: 'block'})
               })
           })
        
        
DAY4-PM 12:00
    静态完成->数据库渲染静态页面
    
    ### Express 的使用流程
    		1、下载安装express
     			npm i express --save
     		2、引入express
     			var express = require("express");
     		3、创建app对象
     			var app = express();
    		4、配置静态资源
    			app.use(express.static("public"));
    		5、启动服务器
    			app.listen(3000);
    
    ### 数据库连接流程：
    	1.下载安装 mongoose 模块
    	2.引入 mongoose 模块
    	3.连接数据库
    	4.监听连接状态
    	
    ### 模型对象创建流程：
    	1.引入 mongoose 模块
    	2.创建 Schema 模式对象
    	3.暴露 Model 模型对象
    	
    ### 数据库操作流程：
    	1.连接数据库
    	2.引入模型对象
    	3.执行插入操作
    	
    ### 服务器操作流程：
    	1.下载安装 express 模块
    	2.引入 express 模块
    	3.创建 app 服务器
    	4.配置静态资源
    