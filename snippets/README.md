This folder includes sample code snippets that are generally reuable or repeated when when setting up ones own coach 
views to use the paging-section-tk assets

    showHideFitlers.js is a function for showing or hiding a filter triggered from the onclick 
    event of a button and loaded inside a deferred section. This goes in a parent CV in which 
    the fitler coach view is configred.

    filterSortOnChangeEvent.js is a example function of setting the paging section variables 
    and calling first on the paging section triggering a reload of the data based on the new filter 
    and sort configurations. This goes in a parent or mutual CV that the paging section and fitler 
    coach view reside.
    
    example-base-business-object-query.js is a base query example for returning business data 
    mapped to a business object. This example is used in the data service pattern example in toolkit. 
    
    example-base-total-records.js is a base query returns the total number of records in the dataset. 
    This example is used in the data service pattern example in toolkit. 
    
    where-and-order-pattern.js is a standardised module that can be reused the developer needs 
    to only change the initTableProperties() fucntion to have column details sepfic to the 
    table being filtered.
    
    default-filterDataList.js is the default list data used in the simulation example to show the 
    WHERE clause being inserted in the server side query
    
     default-sortConfigList.js is the default list data used in the simulation example to show the 
     ORDER by clause being inserted in the server side query
