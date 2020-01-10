this.requestReview = function() {
	
	var data = _this.ui.get("Paging_Section_CV1").getAllSelectedRecords();
		
	_this.context.options.selectedPurchaseDataList.set("value", data);
 	
 	_this.ui.get("Paging_Section_CV1").clearSelectedRecords();
 	
 	_this.ui.get("Modal_Section1").show();
 	
}
