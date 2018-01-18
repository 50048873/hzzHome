if (!HZZ) { 
	var HZZ = {};
}

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
			        max: 100,
			        lineWidth: 1
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
			                format: '{point.y:.1f}%'
			            }
			        }
			    },
			    tooltip: {
			        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			    },

			    series: [{
			        name: 'Brands',
			        colorByPoint: true,
			        data: [{
			            name: '台州',
			            y: 56.33,
			            color:"#29abe1"
			        }, {
			            name: '温州',
			            y: 24.03,
			            color:"#29abe1"
			        }, {
			            name: '宁波',
			            y: 10.38,
			            color:"#29abe1"
			        }, {
			            name: '嘉兴',
			            y: 4.77,
			            color:"#29abe1"
			        }, {
			            name: '杭州',
			            y: 0.91,
			            color:"#29abe1"
			        }, {
			            name: '绍兴',
			            y: 2,
			            color:"#29abe1"
			        }, {
			            name: '丽水',
			            y: 20,
			            color:"#29abe1"
			        }]
			    }]
			});
		}
	}
};

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
		                    color: '#25408f'
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
		                    name: '<div class="circleDesc"><b>开工</b><b>（271条）</b></div>',
		                    y: 52
		                },
		                {
		                    name: '<div class="circleDesc"><b>待建</b><b>（21条）</b></div>',
		                    y: 10
		                },
		                {
		                    name: '<div class="circleDesc"><b>待批</b><b>（141条）</b></div>',
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
		                    distance: 5,
		                    useHTML: true,
		                    color: '#25408f'
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
		                    name: '<b>生活垃圾</b><br><b>（88起）</b>',
		                    y: 40
		                },
		                {
		                    name: '<b>污水排放</b><br><b>（57起）</b>',
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

HZZ.xhwzl = {
	methods: { 
		xhwzl: function(id) {
			Highcharts.chart(id, {
			    chart: {
			        type: 'bar'
			    },
			    title: {
			        text: null
			    },
			    xAxis: {
			        categories: ['崇明区', '宝山区', '浦东新区', '松江区', '奉贤区', '嘉定区', '普陀区', '长宁区', '徐汇区', '虹口区'],
			        title: {
			            text: null
			        },
			        opposite: true,
			        tickWidth: 0,
			        //offset: 20,
			    },
			    yAxis: {
			        min: 0,
			        title: null,
			        labels: {
			            overflow: 'justify'
			        },
			        reversed: true,
			        gridLineWidth: 0,
			        lineWidth: 1,
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
			    credits: {
			        enabled: false
			    },
			    series: [{
			        name: '完成率',
			        data: [79, 55, 65, 39, 22, 18, 30, 78, 38, 28]
			    }]
			});
		}
	}
};

HZZ.sjcll = {
	methods: { 
		sjcll: function(id) {
			Highcharts.chart(id, {
			    chart: {
			        type: 'bar'
			    },
			    title: {
			        text: null
			    },
			    xAxis: {
			    	//visible: false,
			        categories: ['崇明区', '宝山区', '浦东新区', '松江区', '奉贤区', '嘉定区', '普陀区', '长宁区', '徐汇区', '虹口区'],
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
			        lineWidth: 1,
			        /*minorGridLineWidth: 0,
		            minorTickInterval: 20,
		            minorTickColor: 'red',
		            minorTickWidth: 1*/
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
			    credits: {
			        enabled: false
			    },
			    series: [{
			        name: '完成率',
			        data: [79, 55, 65, 39, 22, 18, 30, 78, 38, 28]
			    }]
			});
		}
	}
};

HZZ.szdblbhqs = {
	methods: { 
		szdblbhqs: function(id) {
			Highcharts.setOptions({
			    colors: ['#7e56cc', '#0970b9', '#43bfeb', '#4d4f4f']
			});
			Highcharts.chart(id, {
				credits: false,
			    title: {
			        text: null
			    },

			    yAxis: {
			        title: {
			            text: null
			        },
			        lineWidth: 1,
			        tickAmount: 8 // 刻度总数（横线条数量）
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
			        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 97031, 119931, 137133, 154175]
			    }, {
			        name: '市级',
			        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 32490, 30282, 38121, 40434]
			    }, {
			        name: '县级',
			        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 20185, 24377, 32147, 39387]
			    }, {
			        name: '乡镇以下',
			        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227, 15112, 22452, 34400, 34227]
			    }],

			    responsive: {
			        rules: [{
			            condition: {
			                maxWidth: 500
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
		fqyszdbl: function(id) {
			$.ajax({
				url: 'svg/map.svg',
				dataType: 'xml'
			}).then(function(res) {
				var svg = res.documentElement;
				$('#' + id).html(svg);
			}, function(err) {
				console.log(err)
			});
		}
	}
};