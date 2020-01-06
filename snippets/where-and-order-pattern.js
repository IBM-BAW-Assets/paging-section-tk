function initTableProperties() {
	var colParms = new tw.object.listOf.ColumnParameter();
	
	var i = 0;
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "ID";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "INTEGER";
	
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "RECEIPT_ID";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "VARCHAR";

	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "PURCHASE_DT";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "TIMESTAMP";
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "PURCHASE_AMT";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "DOUBLE";
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "COUNTRY";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "VARCHAR";
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "PRODUCT_TP";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "INTEGER";
	
	colParms[i] = new tw.object.ColumnParameter();
	colParms[i].index = i;
	colParms[i].columnName = "CITY_CD";
	colParms[i].parameter = new tw.object.SQLParameter();
	colParms[i].parameter.mode = "IN";
	colParms[i++].parameter.type = "CHAR";
	
	return colParms;

}

function getColumnIndex(dbColumnName, tablePropsList) {


	var len = tablePropsList.length;
	
	for (var i=0; i < len; i++) {
	
		if (dbColumnName === tablePropsList[i].columnName) {
		
			return i;
		}
	
	}
	
	return null;
}

function isRangeType(filterData) {
	
	
	var rangeTypes = ["decR","intR","dateR"];
	var len = rangeTypes.length;
	
	for (var i=0; i< len; i++) {
		
		if (filterData.dataType  == rangeTypes[i]) {
			
			return true;
		}
	}
	
	return false;

}

//Filter
function formatList(dbColumn, aList) {

	var sqlBit = dbColumn; 
	
	var len = aList.length;
	if (len == 1) {
	
		sqlBit += "= ?"
		
		return sqlBit;
	
	}
	
	sqlBit += " IN (";
	for (var i= 0; i< len; i++) {
	
		if (i > 0) {
		
			sqlBit += ", ";
		}
		sqlBit += "?"; 
	}
	sqlBit += ")";
	
	return sqlBit;
}

function formatRange(dbColumn) {

	return dbColumn + " BETWEEN ? AND ?"; 
	
}

function getFilterdDataList(filterData) {

	var type = filterData.dataType;
	
	if (type == "decimal") {

		return filterData.decimalList;
	}
	else if ((type == "intValue") || (type == "integer")) {

		return filterData.integerList;
	} 
	else {

		return filterData.stringList;
	} 
	

}

function getFromValue(filterData) {
	var type = filterData.dataType;
	
	if (type == "intR") {

		return filterData.intFrom;
	} 
	else if (type == "decR") {

		return filterData.decFrom;
	} 
	else if (type == "dateR") {

		return filterData.dateFrom;
	}

}

function getToValue(filterData) {

	var type = filterData.dataType;
	
	
	if (type == "intR") {

		return filterData.intTo;
	} 
	else if (type == "decR") {

		return filterData.decTo;
	} 
	else if (type == "dateR") {

		return filterData.dateTo;
	}


}

tw.local.sqlParameters = new tw.object.listOf.SQLParameter();

var count = 0;
var props = initTableProperties();

//Check if any fitlers
if ((tw.local.filterDataList != null) && (tw.local.filterDataList.listLength > 0)) {


	
	var filLen = tw.local.filterDataList.listLength;
	
	tw.local.sql += "\nWHERE ";
	
	var filType = null;
	var idx = -1;
	
	for (var i=0; i< filLen; i++) {
		
		if (i > 0) {
			tw.local.sql += " AND ";
		}
		
		tw.local.sql += "("
		idx = getColumnIndex(tw.local.filterDataList[i].dbColumnName, props);

		if (isRangeType(tw.local.filterDataList[i])) {
		
			tw.local.sql += formatRange(props[idx].columnName);
			
			var fromVal = getFromValue(tw.local.filterDataList[i]);
			var toVal = getToValue(tw.local.filterDataList[i]);
			
			tw.local.sqlParameters[count] = new tw.object.SQLParameter();
			tw.local.sqlParameters[count].mode = props[idx].parameter.mode;
			tw.local.sqlParameters[count].type = props[idx].parameter.type;
			tw.local.sqlParameters[count++].value = fromVal;
			
			tw.local.sqlParameters[count] = new tw.object.SQLParameter();
			tw.local.sqlParameters[count].mode = props[idx].parameter.mode;
			tw.local.sqlParameters[count].type = props[idx].parameter.type;
			tw.local.sqlParameters[count++].value = toVal;
		}
		else {
		
			var aList = getFilterdDataList(tw.local.filterDataList[i]);
			var aLen = aList.length;
			tw.local.sql += formatList(props[idx].columnName, aList);
			
			for (var p=0; p < aLen; p++) {
			
				tw.local.sqlParameters[count] = new tw.object.SQLParameter();
				tw.local.sqlParameters[count].mode = props[idx].parameter.mode;
				tw.local.sqlParameters[count].type = props[idx].parameter.type;
				tw.local.sqlParameters[count++].value = aList[p];
			}
			
			
		}
	
		tw.local.sql += ")";
	}
}	

//// check if any sort
if ((tw.local.sortConfigList != null) && (tw.local.sortConfigList.listLength > 0)) {
	//ADD SORT
	
	var sortLen = tw.local.sortConfigList.listLength;
	
	tw.local.sql += "\nORDER BY "
	var idx = -1;
	var orderVal = "";
	
	for (var i=0; i < sortLen; i++) {
	
	
		if (i > 0) {
		
			tw.local.sql += " AND ";
		}
		
		idx = getColumnIndex(tw.local.sortConfigList[i].dbColumnName, props);
		
		orderVal = " DESC";
        	
        	if (tw.local.sortConfigList[i].sortAscending) {

        	    orderVal = " ASC";
      	}
		tw.local.sql += props[idx].columnName + orderVal;
		
	}
}


tw.local.sql = tw.local.sql + " LIMIT " + tw.local.pageSize + " OFFSET " + ((tw.local.currPage -1) * tw.local.pageSize);
