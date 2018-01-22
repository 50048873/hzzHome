if (!HZZ) { 
    var HZZ = {};
}

HZZ.fqyszdbl = {
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
                _this.fqyszdblData.forEach(function(item, index) { 
                    var $path = $(svg).find('text:contains(' + item.name + ')').prev();
                    switch (item.percent) {
                        case colorGrade[0].PERCENT:
                            $path.attr('fill', colorGrade[0].COLOR);
                            break;
                        case colorGrade[1].PERCENT:
                            $path.attr('fill', colorGrade[1].COLOR);
                            break;
                        case colorGrade[2].PERCENT:
                            $path.attr('fill', colorGrade[2].COLOR);
                            break;
                        case colorGrade[3].PERCENT:
                            $path.attr('fill', colorGrade[3].COLOR);
                            break;
                        case colorGrade[4].PERCENT:
                            $path.attr('fill', colorGrade[4].COLOR);
                            break;
                        case colorGrade[5].PERCENT:
                            $path.attr('fill', colorGrade[5].COLOR);
                            break;
                    }
                });
                _this.svgMap = svg;
                $('#' + obj.id).html(svg);
            }, function(err) {
                console.log(err)
            });
        }
    }
};

HZZ.xmjdtj = {
    methods: { 
        xmjdtj: function(id) {
            var _this = this;
            var chart = null;
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
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        size: 130,
                        innerSize: '60%',
                        dataLabels: {
                            enabled: true,
                            crop: false,
                            overflow: 'none',
                            useHTML: true,
                            distance: 20,
                            color: HZZ.config.colors.COLOR_PRIMARY
                            /*
                            formatter: function() {
                                //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
                                return this.y + '%';
                            }*/
                        },
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
        }
    }
};

HZZ.gztstj = {
    methods: { 
        gztstj: function(id) {
            var chart = null;
            var _this = this;
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
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        size: 130,
                        innerSize: '60%',
                        dataLabels: {
                            enabled: true,
                            crop: false,
                            overflow: 'none',
                            distance: 5,
                            useHTML: true,
                            color: HZZ.config.colors.COLOR_PRIMARY
                            //connectorPadding: 1,
                            /*
                            formatter: function() {
                                //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
                                return this.y + '%';
                            }*/
                        },
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
        }
    }
};

HZZ.xhwcl = {
    methods: { 
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
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: _this.xhwclData.series
            });
        }
    }
};

HZZ.sjcll = {
    methods: { 
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
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: _this.sjcllData.series
            });
        }
    }
};

HZZ.szdblbhqs = {
    methods: { 
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
                        text: null
                    },
                    labels: {   // 坐标轴标签（即坐标轴旁的文字）
                        style: {
                            color: HZZ.config.colors.COLOR_PRIMARY
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
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 1
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
                }
            });
        }
    }
};

HZZ.hzzkhqk = {
    methods: { 
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
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y}分'/*,
                            inside: true*/
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: _this.hzzkhqkData.series
            });
        }
    }
};