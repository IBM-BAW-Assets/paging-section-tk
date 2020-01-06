 this.showHideFilters = function() {
 
 	_this.ui.get("filterSection").setVisible(true);
 	
 	if (_this.ui.get("filterSection").isLoaded()) {
 		
 		if (_this.ui.get("btnShowFilter").getText() === "Show Filter") {
 			
 			_this.ui.get("filterCV").setVisible(true);
 			_this.ui.get("btnShowFilter").setText("Hide Filter");
 			_this.ui.get("btnShowFilter").setIcon("arrow-up");
 		}
 		else {
 			
 			_this.ui.get("filterCV").setVisible(false,true);
 			_this.ui.get("btnShowFilter").setText("Show Filter");
 			_this.ui.get("btnShowFilter").setIcon("arrow-down");				
 		}
 	}	
 	else {
 	
 		_this.ui.get("filterSection").lazyLoad(0,true);	
 	}
 }
