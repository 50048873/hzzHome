'use strict';

if (!HZZ) { 
    var HZZ = {};
}

HZZ.mixin = {
    home: {
        methods: { 
            /*
             *  obj: { 
                    id: ''
                    url: ''
                }
            */
            fqyszdbl: function(obj) {
                var _this = this;
                $.ajax({
                    url: obj.url,
                    dataType: 'xml'
                }).then(function(res) {
                    var svg = res.documentElement,
                        colorGrade = HZZ.config.colorGrade;
                    _this.fqyszdblData.data.forEach(function(item, index) { 
                        var $path = $(svg).find('text:contains(' + item.name + ')').prev(),
                            percent = parseFloat(item.percent);
                        if (percent >= 0 && percent < 50) {
                            $path.attr({
                                fill: colorGrade[0].COLOR,
                                percent: item.percent
                            });
                        } else if (percent >= 50 && percent < 60) { 
                            $path.attr({
                                fill: colorGrade[1].COLOR,
                                percent: item.percent
                            });
                        } else if (percent >= 60 && percent < 70) { 
                            $path.attr({
                                fill: colorGrade[2].COLOR,
                                percent: item.percent
                            });
                        } else if (percent >= 70 && percent < 80) { 
                            $path.attr({
                                fill: colorGrade[3].COLOR,
                                percent: item.percent
                            });
                        } else if (percent >= 80 && percent < 90) { 
                            $path.attr({
                                fill: colorGrade[4].COLOR,
                                percent: item.percent
                            });
                        } else if (percent >= 90 && percent <= 100) { 
                            $path.attr({
                                fill: colorGrade[5].COLOR,
                                percent: item.percent
                            });
                        }
                    });
                    _this.$svgMap = $(svg);
                    $('#' + obj.id).html(svg);
                }, function(err) {
                    $.error(err.responseText);
                });
            },
            xmjdtj: function(id) {
                var _this = this;
                var chart = null;
                var dataLabels = {};
                if (HZZ.util.isGeIE10()) {
                    dataLabels = {
                        enabled: true,
                        useHTML: false,
                        distance: 20,
                        color: HZZ.config.colors.COLOR_PRIMARY
                    }
                } else {
                    dataLabels = {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        useHTML: true,
                        distance: 20,
                        color: HZZ.config.colors.COLOR_PRIMARY
                    }
                }
                Highcharts.setOptions({
                    colors: ['#39b7e7', '#0970b9', '#737474', '#b5b5b5']
                });
                Highcharts.chart(id, {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        floating: true,
                        text: _this.xmjdtjData.text,
                        style: { "color": "#424242", "fontSize": "12px" }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{point.color}"></span>'
                    },
                    plotOptions: {
                        pie: {
                            size: 130,
                            innerSize: '60%',
                            dataLabels: dataLabels
                        },
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('项目进度统计－>数据：', _this.xmjdtjData, this.name)
                                        layer.open({
                                            title: '项目进度统计',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: $(this.name).removeAttr('class').get(0).innerHTML
                                        });
                                    }
                                }
                            }
                        }
                    },
                    series: _this.xmjdtjData.series
                }, function(c) {
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    c.setTitle({
                        //x: 4,
                        y: centerY + titleHeight/2
                    });
                    chart = c;
                });
            },
            gztstj: function(id) {
                var chart = null;
                var _this = this;
                var dataLabels = {};
                if (HZZ.util.isGeIE10()) {
                    dataLabels = {
                        enabled: true,
                        useHTML: false,
                        distance: 20,
                        color: HZZ.config.colors.COLOR_PRIMARY
                    }
                } else {
                    dataLabels = {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        useHTML: true,
                        distance: 20,
                        color: HZZ.config.colors.COLOR_PRIMARY
                    }
                }
                Highcharts.setOptions({
                    colors: ['#39b7e7', '#0970b9', '#737474', '#b5b5b5']
                });
                Highcharts.chart(id, {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        floating: true,
                        text: _this.gztstjData.text,
                        style: { "color": "#42", "fontSize": "12px" }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{point.color}"></span>'
                    },
                    plotOptions: {
                        pie: {
                            size: 130,
                            innerSize: '60%',
                            dataLabels: dataLabels
                        },
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('公众投诉统计－>数据：', _this.xmjdtjData, this.name)
                                        layer.open({
                                            title: '公众投诉统计',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: $(this.name).removeAttr('class').get(0).innerHTML
                                        });
                                    }
                                }
                            }
                        }
                    },
                    series: _this.gztstjData.series
                }, function(c) {
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    c.setTitle({
                        //x: 4,
                        y: centerY + titleHeight/2
                    });
                    chart = c;
                });
            },
            xhwcl: function(id) {
                var _this = this;
                Highcharts.chart(id, {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: null
                    },
                    xAxis: {
                        //visible: false,
                        categories: _this.categoriesData,
                        title: {
                            text: null
                        },
                        labels: {
                            style: {
                                color: HZZ.config.colors.COLOR_PRIMARY,
                                distance: 30
                            },
                            align: 'center',
                            useHTML: true
                        },
                        opposite: true,
                        tickWidth: 0,   // 刻度线的宽度（轴线上的小短线）
                        //offset: 20,
                        lineWidth: 0    // 轴线的宽度
                    },
                    yAxis: {
                        min: 0,
                        max: 100,
                        title: null,
                        labels: {
                            overflow: 'justify'
                        },
                        reversed: true,
                        gridLineWidth: 0,
                        lineWidth: 1,
                            useHTML: true
                    },
                    tooltip: {
                        valueSuffix: '%'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        },
                        /*series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}%'
                            }
                        },*/
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('巡河完成率－>数据：', _this.xmjdtjData, this)
                                        layer.open({
                                            title: '巡河完成率',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: this.category + '：' + this.y + '%'
                                        });
                                    }
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: _this.xhwclData.series
                });
            },
            sjcll: function(id) {
                var _this = this;
                Highcharts.chart(id, {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: null
                    },
                    xAxis: {
                        visible: false,
                        categories: _this.categoriesData,
                        title: {
                            text: null
                        },
                        tickWidth: 0
                        //opposite: true
                    },
                    yAxis: {
                        min: 0,
                        title: null,
                        labels: {
                            overflow: 'justify'
                        },
                        gridLineWidth: 0,
                        lineWidth: 1
                    },
                    tooltip: {
                        valueSuffix: '%'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        },
                        /*series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}%'
                            }
                        },*/
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('事件处理率－>数据：', _this.xmjdtjData, this)
                                        layer.open({
                                            title: '事件处理率',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: this.category + '：' + this.y + '%'
                                        });
                                    }
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: _this.sjcllData.series
                });
            },
            szdblbhqs: function(id) {
                var _this = this;
                Highcharts.setOptions({
                    colors: ['#7e56cc', '#09b9', '#43bfeb', '#4d4f4f']
                });
                Highcharts.chart(id, {
                    credits: false,
                    title: {
                        text: null
                    },
                    xAxis: {
                        tickWidth: 0,   // 刻度线宽度
                        lineWidth: 5,   // 坐标轴轴线的宽度
                        lineColor: '#cdcdcb',   // 坐标轴轴线的颜色
                        labels: {   // 坐标轴标签（即坐标轴旁的文字）
                            style: {
                                color: HZZ.config.colors.COLOR_PRIMARY
                            },
                            step: 1     // 步进
                        }
                    },
                    yAxis: {
                        title: {
                            text: null,
                            
                        },
                        labels: {   // 坐标轴标签（即坐标轴旁的文字）
                            style: {
                                color: HZZ.config.colors.COLOR_PRIMARY
                            },
                            formatter: function (){   
                                return this.value + '%' ;   
                            }
                        },
                        max: 100,
                        lineWidth: 5,   // 坐标轴轴线的宽度
                        lineColor: '#cdcdcb',   // 坐标轴轴线的颜色
                        //tickAmount: 8 // 刻度总数（横线条数量）
                    },
                    legend: {
                        floating: true,
                        layout: 'horizontal',
                        align: 'right',
                        verticalAlign: 'top',
                        y: -55,
                        rtl: true,
                        reversed: true
                    },
                    plotOptions: {
                        /*series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 1
                        },*/
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('水质达标率变化趋势－>数据：', _this.szdblbhqsData, this)
                                        layer.open({
                                            title: '水质达标率变化趋势',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: this.series.name + '：' + this.y + '%'
                                        });
                                    }
                                }
                            }
                        }
                    },
                    series: _this.szdblbhqsData.series,
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 50
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<b>{point.y:.2f}%</b>'
                    },
                });
            },
            hzzkhqk: function(id) {
                var _this = this;
                Highcharts.chart(id, {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        text: null
                    },
                    xAxis: {
                        type: 'category',
                        tickWidth: 0
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        min: 0,
                        max: 100,
                        lineWidth: 1,
                        stackLabels: {
                            enabled: true,
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        /*series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}分'
                            }
                        },*/
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        console.log('河长制考核情况－>数据：', _this.szdblbhqsData, this)
                                        layer.open({
                                            title: '河长制考核情况',
                                            type: 1,
                                            skin: 'layui-layer-home', 
                                            anim: 0,
                                            shadeClose: true, 
                                            content: this.name + '：' + this.y + '%'
                                        });
                                    }
                                }
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
                    },

                    series: _this.hzzkhqkData.series
                });
            }
        }
    },
    dialog: {
        methods: {
            /*
             {
                content: String, layer弹出的content元素id，如'#form',
                title: layer的title,
                area: layer的area
             }
            */
            show: function(obj) { 
                var _this = this,
                    util = HZZ.util,
                    message = HZZ.MESSAGE,
                    title = obj.title || message.TITLE;

                setTimeout(function() { 
                    _this.layerIndex = layer.open({
                        title: '<i class="layui-layer-titleDecoration"></i>' + title,
                        type: 1,
                        area: obj.area,
                        //offset: '100px',
                        //maxHeight: 630,
                        zIndex: 10,
                        content: $(obj.content),
                        cancel: function(index, layero){
                            layer.close(index);
                            util.removeHtml();
                        }
                    });
                }, 1000/60);
            },
            close: function() { // 关闭layer弹窗
                var util = HZZ.util;
                layer.close(this.layerIndex);
                util.removeHtml();
            }
        }
    }
};

if (typeof Object.freeze === 'function') {
    Object.freeze(HZZ.mixin);
}