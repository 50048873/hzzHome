if (!HZZ) { 
	var HZZ = {};
}

HZZ.xmjdtj = {
	methods: { 
		xmjdtj: function(id) {
			var chart = null;
			Highcharts.setOptions({
			    colors: ['#39b7e7', '#0970b9', '#737474', '#b5b5b5', '#24CBE5']
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
		            text: '总计471条',
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
		                    color: HZZ.colors['blue-1']
		                    /*
		                    formatter: function() {
		                        //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
		                        return this.y + '%';
		                    }*/
		                },
			        }
			    },

			    series: [{
			        data: [
		        		{
		                    name: '<div><b>完工</b><b>（38条）</b></div>',
		                    y: 8
		                },
		                {
		                    name: '<div class="circleDesc circleDesc-kg"><b>开工</b><b>（27条）</b></div>',
		                    y: 52
		                },
		                {
		                    name: '<div class="circleDesc circleDesc-dj"><b>待建</b><b>（21条）</b></div>',
		                    y: 10
		                },
		                {
		                    name: '<div class="circleDesc circleDesc-dp"><b>待批</b><b>（14条）</b></div>',
		                    y: 30
		                }
			        ]
			    }]
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
			Highcharts.setOptions({
			    colors: ['#39b7e7', '#0970b9']
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
		            text: '总计145起',
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
		                    color: HZZ.colors['blue-1']
		                    //connectorPadding: 1,
		                    /*
		                    formatter: function() {
		                        //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
		                        return this.y + '%';
		                    }*/
		                },
			        }
			    },

			    series: [{
			        data: [
		        		{
		                    name: '<div class="circleDesc circleDesc-shlj"><b>生活垃圾</b><b>（88起）</b></div>',
		                    y: 40
		                },
		                {	
		                	name: '<div class="circleDesc circleDesc-wspf"><b>污水排放</b><b>（57起）</b></div>',
		                    y: 60
		                }
			        ]
			    }]
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
			        categories: _this.categories,
			        title: {
			            text: null
			        },
			        labels: {
			        	style: {
			        		color: HZZ.colors['blue-1'],
			        		distance: 30,
			        		fontWeight: 'bold'
			        	}
			        },
			        opposite: true,
			        tickWidth: 0,	// 刻度线的宽度（轴线上的小短线）
			        //offset: 20,
			        lineWidth: 0	// 轴线的宽度
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
			    series: [{
			        name: '完成率',
			        data: [79, 55, 65, 39, 22, 18, 30, 78, 38]
			    }]
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
			        categories: _this.categories,
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
			    series: [{
			        name: '完成率',
			        data: [79, 55, 65, 39, 22, 18, 30, 78, 38]
			    }]
			});
		}
	}
};

HZZ.szdblbhqs = {
	methods: { 
		szdblbhqs: function(id) {
			Highcharts.setOptions({
			    colors: ['#7e56cc', '#09b9', '#43bfeb', '#4d4f4f']
			});
			Highcharts.chart(id, {
				credits: false,
			    title: {
			        text: null
			    },
			    xAxis: {
			    	tickWidth: 0,	// 刻度线宽度
			    	lineWidth: 5,	// 坐标轴轴线的宽度
			    	lineColor: '#cdcdcb',	// 坐标轴轴线的颜色
			    	labels: {	// 坐标轴标签（即坐标轴旁的文字）
			        	style: {
			        		color: HZZ.colors['blue-1'],
			        		fontWeight: 'bold'
			        	},
			        	step: 1		// 步进
			        }
			    },
			    yAxis: {
			        title: {
			            text: null
			        },
			        labels: {	// 坐标轴标签（即坐标轴旁的文字）
			        	style: {
			        		color: HZZ.colors['blue-1'],
			        		fontWeight: 'bold'
			        	}
			        },
			        max: 100,
			        lineWidth: 5,	// 坐标轴轴线的宽度
			        lineColor: '#cdcdcb',	// 坐标轴轴线的颜色
			        //tickAmount: 8	// 刻度总数（横线条数量）
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

			    series: [{
			        name: '省级',
			        data: [43, 52, 57, 69, 97, 11, 13, 15, 97, 11, 13, 15]
			    }, {
			        name: '市级',
			        data: [24, 24, 29, 29, 32, 30, 38, 40, 32, 30, 38, 40]
			    }, {
			        name: '县级',
			        data: [11, 17, 16, 19, 20, 24, 32, 39, 20, 24, 32, 39]
			    }, {
			        name: '乡镇以下',
			        data: [50, 36, 79, 12, 15, 22, 34, 34, 15, 22, 34, 34]
			    }],

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

HZZ.fqyszdbl = {
	methods: { 
		/*
		 *	obj: { 
				id: ''
				url: ''
		 	}
		*/
		fqyszdbl: function(obj) {
			$.ajax({
				url: obj.url,
				dataType: 'xml'
			}).then(function(res) {
				var svg = res.documentElement;
				$('#' + obj.id).html(svg);
			}, function(err) {
				console.log(err)
			});
		}
	}
};

HZZ.hzzkhqk = {
	methods: { 
		hzzkhqk: function(id) {
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
			                fontWeight: 'bold',
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
			                format: '{point.y:.1f}'/*,
			                inside: true*/
			            }
			        }
			    },
			    tooltip: {
			        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			    },

			    series: [{
			        name: '河长制考核情况',
			        colorByPoint: true,
			        data: [{
			            name: '龙潭',
			            y: 82,
			            color:"#29abe1"
			        }, {
			            name: '栖霞',
			            y: 98,
			            color:"#29abe1"
			        }, {
			            name: '燕子矶',
			            y: 78,
			            color:"#29abe1"
			        }, {
			            name: '马群',
			            y: 96,
			            color:"#29abe1"
			        }, {
			            name: '迈皋桥',
			            y: 93,
			            color:"#29abe1"
			        }, {
			            name: '八卦洲',
			            y: 89,
			            color:"#29abe1"
			        }, {
			            name: '仙林',
			            y: 97,
			            color:"#29abe1"
			        }, {
			            name: '西岗',
			            y: 66,
			            color:"#29abe1"
			        }, {
			            name: '尧化',
			            y: 79,
			            color:"#29abe1"
			        }]
			    }]
			});
		}
	}
};