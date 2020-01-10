this.enableRequestReviewButton = function() {
	
	_this.ui.get("Paging_Section_CV1").processSelected();

	if (_this.ui.get("Paging_Section_CV1").hasRowSelected()) {
		_this.ui.get("Button1").setEnabled(true);
	} else {
		_this.ui.get("Button1").setEnabled(false);
	}
	
}
