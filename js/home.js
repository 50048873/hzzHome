'use strict';

new Vue({ 
    el: '#container',
    data: function() {
        return { 
            colorGrade: HZZ.config.colorGrade,  // 颜色分类
            categoriesData: [],         // 街道分类
            yearTaskData: [],           // 年度任务
            totalTaskData: [],          // 到2020年度任务
            fqyszdblData: [],           // 分区域水质达标率
            xmjdtjData: [],             // 项目进度统计
            gztstjData: [],             // 公众投诉统计
            xhwclData: [],              // 巡河完成率
            sjcllData: [],              // 事件处理率
            jgryzcData: [],             // 机构人员组成
            szdblbhqsData: [],          // 水质达标率变化趋势
            hzzkhqkData: []             // 河长制考核情况
        }
    },
    mixins: [HZZ.mixin.home],
    methods: { 
        getData: function() {   // 获取首页数据
            var _this = this;
            HZZ.api.getHomeData()
                .then(function(res) {
                    if (HZZ.api.result === res.result) { 
                        _this.categoriesData = res.categories;
                        _this.yearTaskData = res.yearTask;
                        _this.totalTaskData = res.totalTask;
                        _this.fqyszdblData = res.fqyszdbl;
                        _this.xmjdtjData = res.xmjdtj;
                        _this.gztstjData = res.gztstj;
                        _this.xhwclData = res.xhwcl;
                        _this.sjcllData = res.sjcll;
                        _this.jgryzcData = res.jgryzc;
                        _this.szdblbhqsData = res.szdblbhqs;
                        _this.hzzkhqkData = res.hzzkhqk;

                        _this.renderChart(); 
                        _this.mapTooltip();                
                    }
                }, function(err) {
                    $.error(err.responseText);
                });
        },
        renderChart: function() {               // 渲染图表
            var _this = this;
            this.$nextTick(function() { 
                _this.fqyszdbl({                // 分区域水质达标率
                    id: 'fqyszdbl',
                    url: 'svg/xx.svg'
                });
                _this.xmjdtj('xmjdtj');         // 项目进度统计
                _this.gztstj('gztstj');         // 公众投诉统计
                _this.xhwcl('xhwcl');           // 巡河完成率    
                _this.sjcll('sjcll');           // 事件处理率
                _this.szdblbhqs('szdblbhqs');   // 水质达标率变化趋势
                _this.hzzkhqk('hzzkhqk');       // 河长制考核情况
            });
        },
        showRelative: function(event, color) {  // 当鼠标移入分区域水质达标率某个色块时，高亮对应地图块
            var $span = $(event.target);
            var $svg = this.$svgMap;
            this.$checked = $svg.find('path[fill="' + color + '"]');
            $svg.append(this.$checked.parent()[0]);
            $span.addClass(HZZ.config.interactionCssClassname.ON);
            this.$checked.attr('class', HZZ.config.interactionCssClassname.ON);
        },
        hideRelative: function(event, color) {  // 当鼠标移出分区域水质达标率某个色块时，移除高亮
            var $span = $(event.target);
            var $svg = this.$svgMap;
            $span.removeClass(HZZ.config.interactionCssClassname.ON);
            this.$checked.removeAttr('class');
            this.$checked = null;
        },
        mapTooltip: function() {    // 地图mouseenter事件
            var _this = this;
            $('body').on('mouseenter', '#xx g', function(e) {
                var $this = $(this),
                    name = $this.find('text').text(),
                    percent = $this.find('path').attr('percent'),
                    tips = '<p>' + name + '</p><p>水质达标率：' + percent + '</p>';
                _this.$svgMap.append(this);
                layer.tips(tips, this, {
                    tips: [1, '#7e56cc'],
                    time: 1000
                });
            });
        }
    },
    created: function() { 
        this.getData();
    }
});