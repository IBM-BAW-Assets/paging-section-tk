Contained in the Example Data folder is a sample DDL script for the creation of the Filter and Sort configuration data tables

EG_DDL.sql containes the Data Definition for The Example data structures

    REPLACE MYSCHEMANAME with the name of the SCHEMA that will be used and configued in the Environment variable 
                         the toolkit uses for data lookup. 
    REPLACE "Administrator" with the user that should have control permission on the tables.
Run the appropriate database command line to load the file DB2 example follows:

On Windows, type the following: C:\db2\BIN\DB2CW.BAT (This sets up the DB2 command line environment.)

        C:\db2\BIN> db2 -stvf EG_DDL.sql 
On Linux and UNIX, type the following:

    . $HOME/sqllib/db2profile (For bash or Korn shell,this sets up the DB2 command line environment.)
    cd $HOME/sqllib/bin
    db2 -stvf EG_DDL.sql

Sample Data that can be used to setup the example database used in the article is also availble here load these inserts in the following order. (Can use similar command as detailed fro the DDL)
    1. EG_CITY_CODE_sample.sql
    2. EG_PRODUCT_TYPE_sample.sql and
    3. EG_PRODUCT_PURCAHSE_sample.sql
