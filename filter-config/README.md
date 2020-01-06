Contained in the Filter Config folder is a sample DDL script for the creation of the Filter and Sort configuration data tables

SS_FILTER_AND_SORT_DDL.sql containes the Data Definition for the TableFilterCV Fitler and Sort tables for the configuration of the filter and sort coach view in the Server Side Paging Section Tool kit.  
    This file should be edited replacinmg MYSCHEMANAME and ADMINISTRATOR with values suitable to your environment.
    
        REPLACE MYSCHEMANAME with the name of the SCHEMA that will be used and configued in the Environment variable 
                             the toolkit uses for data lookup. 
        REPLACE "Administrator" with the user that should have control permission on the tables.

    Run the appropriate database command line to load the file DB2 example follows
        
        C:\db2\BIN> db2 -stvf 
