if (!HZZ) { 
    var HZZ = {};
}

/*HZZ.apiErrorMessage = function(err) {
    switch (err.status) {
        case 404:
            this.$message({
                type: "error",
                showClose: true,
                duration: 0,
                dangerouslyUseHTMLString: true,
                message: err.responseText + '<h1>请联系开发人员</h1>',
                customClass: 'apiErrorMessage'
            });
            break;
    }
};*/

// 年度任务
HZZ.api = function() {
    return {
        result: 1,
        getHomeData: function() { 
            return $.ajax({
                type: 'POST',
                url: 'http://10.100.3.113:8081/HzzbsProject/main/queryMainpageData.do',
                //url: 'json/homeData.json',
                dataType: 'json'
            });
        },
        get_dcdb_dbsx_dbfk: function(params) {    // 督办反馈———列表
            var currentPage = params.currentPage1,
                pageSize = params.pageSize1,
                questionType = params.questionType,
                assignedTime = params.assignedTime,
                rectificationPeriod = params.rectificationPeriod;
            return $.ajax({
                url: 'json/dcdb-dbsx-dbfk.json'
            }).then(function(res) {
                var tableData = res.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
                if (questionType) { 
                    tableData = tableData.filter(function(item) {
                        return item.questionType === questionType
                    });
                }
                if (assignedTime) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.assignedTime) >= assignedTime;
                    });
                }

                if (rectificationPeriod) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.rectificationPeriod) <= rectificationPeriod;
                    });
                }
                res = { 
                    result: 1,
                    typeData: res.typeData,
                    tableData: tableData,
                    length: res.tableData.length
                };
                return res;
            });
        },
        get_dcdb_dbsx_xcsj: function(params) {    // 巡查事件———列表
            var currentPage = params.currentPage2,
                pageSize = params.pageSize2,
                questionType = params.questionType,
                startTime = params.startTime,
                endTime = params.endTime;
            return $.ajax({
                url: 'json/dcdb-dbsx-xhsj.json'
            }).then(function(res) {
                console.log(res);
                var tableData = res.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
                if (questionType) { 
                    tableData = tableData.filter(function(item) {
                        return item.questionType === questionType
                    });
                }
                if (startTime) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.reportTime) >= startTime;
                    });
                }

                if (endTime) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.reportTime) <= endTime;
                    });
                }
                res = { 
                    result: 1,
                    typeData: res.typeData,
                    tableData: tableData,
                    length: res.tableData.length
                };
                return res;
            });
        },
        get_dcdb_dbsx_xcsj_formData: function() {    // 巡查事件———编辑对话框数据
            return $.ajax({
                url: 'json/dcdb-dbsx-xhsj-info-data.json'
            });
        },
        get_dcdb_dbsx_zdxm: function() {    // 重点项目列表数据
            return $.ajax({
                url: 'json/dcdb-dbsx-zdxm.json'
            });
        }
    }
}();

if (typeof Object.freeze === 'function') {
    Object.freeze(HZZ.api);
}