if (!HZZ) { 
	var HZZ = {};
}

// 年度任务
HZZ.api = {
	result: 1,
	getData: function() { 
		return $.ajax({
			url: 'data.json'
		});
	}
};