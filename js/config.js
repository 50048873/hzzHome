'use strict';

if (!HZZ) { 
    var HZZ = {};
}

// 配置项
HZZ.config = function(){
    var baseUrl = (function() { // 获取baseUrl
        var location = window.location;
        var contextPath = location.pathname.split("/");
        contextPath.pop();
        contextPath = contextPath.join('/');
        return location.origin + contextPath + '/';
    })();

    return {
        interactionCssClassname: {
            ON: 'ON'
        },
        URLs: {
            baseUrl: baseUrl
        },
        colors: {
            COLOR_PRIMARY: '#25408f'
        },
        colorGrade: [
            {
                COLOR: '#e3f2fb',
                PERCENT: '0%'
            },
            {
                COLOR: '#a9dfff',
                PERCENT: '50%'
            },
            {
                COLOR: '#70cbff',
                PERCENT: '60%'
            },
            {
                COLOR: '#28adf7',
                PERCENT: '70%'
            },
            {
                COLOR: '#0889d1',
                PERCENT: '80%'
            },
            {
                COLOR: '#0068a5',
                PERCENT: '90%'
            },
            {
                COLOR: 'white',
                PERCENT: '100%'
            }
        ],
        pagination: {
            CURRENT_PAGE: 1,                        // 当前页
            PAGESIZE_SELECTION: [5,10,20,40],   // 分页下拉选择框
            PAGESIZE: 5,                        // 每页大小
            TOTAL: 100                          // 总记录条数
        }
    }
}();

// 工具方法
HZZ.util = {
    loadLayerHZZTheme: function() { // 全局配置layer主题
        layer.config({
          extend: '../../../../css/layer-myskin/layer-hzz.css', //加载新皮肤
          skin: 'layer-ext-hzz' //一旦设定，所有弹层风格都采用此主题。
        });
    },
    setHeadBase: function() {   // 设置html页面头部base元素
        var baseUrl = HZZ.config.URLs.baseUrl;
        $('head title').after('<base href="' + baseUrl + '" />');
    },
    loadHtml: function(href) {  // iframe加载html文件
        var topHZZ = top.HZZ;
        topHZZ.$iFrame = $('<iframe class="hzz-iframe" src="' + href + '"></iframe>');
        $(top.document).find('body').append(topHZZ.$iFrame);
    },
    removeHtml: function() {    // 移动loadHtml加载的iframe
        var topHZZ = top.HZZ;
        topHZZ.$iFrame && topHZZ.$iFrame.remove();
    }
};

// 数据缓存区
HZZ.cache = {
    getData: function(key) {
        if (arguments.length === 1) { 
            return data = this[key];
        }
        return this;
    }
};

if (typeof Object.freeze === 'function') {
    Object.freeze(HZZ.config);
}