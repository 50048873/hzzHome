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
                url: 'json/homeData.json'
            });
        },
        get_dcdb_dbsx_dbfk_typeData: function() {    // 督办反馈———问题类型
            return $.ajax({
                url: 'json/dcdb-dbsx-dbfk.json'
            });
        },
        get_dcdb_dbsx_dbfk_tableData: function(params) {    // 督办反馈———列表
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
                    tableData: tableData,
                    length: res.tableData.length
                };
                return res;
            });
        },
        get_dcdb_dbsx_xcsj_typeData: function() {    // 巡查事件———问题类型
            return $.ajax({
                url: 'json/dcdb-dbsx-xcsj.json'
            });
        },
        get_dcdb_dbsx_xcsj_tableData: function(params) {    // 巡查事件———列表
            var currentPage = params.currentPage2,
                pageSize = params.pageSize2,
                questionType = params.questionType,
                startTime = params.startTime,
                endTime = params.endTime;
            return $.ajax({
                url: 'json/dcdb-dbsx-xcsj.json'
            }).then(function(res) {
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
                    tableData: tableData,
                    length: res.tableData.length
                };
                return res;
            });
        },
        get_dcdb_dbsx_xcsj_formData: function() {    // 巡查事件———编辑对话框数据
            return $.ajax({
                url: 'json/dcdb-dbsx-xcsj-info-data.json'
            });
        }
    }
}();

if (typeof Object.freeze === 'function') {
    Object.freeze(HZZ.api);
}