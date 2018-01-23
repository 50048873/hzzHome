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
        get_dcdb_dbsx_typeData: function() { 
            return $.ajax({
                url: 'json/dcdb-dbsx.json'
            });
        },
        get_dcdb_dbsx_tableData: function(params) { 
            var currentPage = params.currentPage,
                pageSize = params.pageSize,
                questionType = params.questionType,
                startDate = params.startDate,
                endDate = params.endDate;
            return $.ajax({
                url: 'json/dcdb-dbsx.json'
            }).then(function(res) {
                var tableData = res.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
                if (questionType) { 
                    tableData = tableData.filter(function(item) {
                        return item.type === questionType
                    });
                }
                if (startDate) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.startDate) >= startDate;
                    });
                }
                if (endDate) { 
                    tableData = tableData.filter(function(item) {
                        return new Date(item.endDate) <= endDate;
                    });
                }
                res = { 
                    result: 1,
                    tableData: tableData,
                    length: res.tableData.length
                };
                return res;
            });
        }
    }
}();

if (typeof Object.freeze === 'function') {
    Object.freeze(HZZ.api);
}