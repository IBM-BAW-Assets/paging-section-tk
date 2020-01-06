 this.filterSortOnChangedEvent = function(filterData, sortConfig) {
 	
 	console.log("filterSortOnChangedEvent");
 	console.log("    filterData", filterData);
 	console.log("    sortConfig", sortConfig);
 	
 	_this.context.options.pagingSectionInit.get("value").set("fitlerDataList", filterData);
 	_this.context.options.pagingSectionInit.get("value").set("sortConfigList", sortConfig);
 	
 	_this.ui.get("Paging_Section_31").first();
 
 }
