Contained in the Filter Config folder is a sample DDL script for the creation of the Filter and Sort configuration data tables

SS_FILTER_AND_SORT_DDL.sql containes the Data Definition for the TableFilterCV Fitler and Sort tables for the configuration of the filter and sort coach view in the Server Side Paging Section Tool kit.  
    This file should be edited replacinmg MYSCHEMANAME and ADMINISTRATOR with values suitable to your environment.
    
        REPLACE MYSCHEMANAME with the name of the SCHEMA that will be used and configued in the Environment variable 
                             the toolkit uses for data lookup. 
        REPLACE "Administrator" with the user that should have control permission on the tables.

   Run the appropriate database command line to load the file DB2 example follows:
        
   On Windows, type the following:
            C:\db2\BIN\DB2CW.BAT  (This sets up the DB2 command line environment.)

            C:\db2\BIN> db2 -stvf SS_FILTER_AND_SORT_DDL.sql 
       
   On Linux and UNIX, type the following:
   
        . $HOME/sqllib/db2profile (For bash or Korn shell,this sets up the DB2 command line environment.)
        cd $HOME/sqllib/bin
        db2 -stvf SS_FILTER_AND_SORT_DDL.sql
        
        
Sample data can be uploaded to recreate the example using the sample data files
    SS_FILTER_CONFIG_sample.sql and
    SS_SORT_CONFIG_sample.sql
