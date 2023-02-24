# sql 错误处理

# 定义条件和处理程序

# mysql_error_code
# sqlstate_value

# 使用Mysql_error_code 
DECLARE File_Not_Be_Null CONDITION FOR 1048;

# 错误类型处理
DECLARE CONTINUE HANDLER FOR File_Not_Be_Null


