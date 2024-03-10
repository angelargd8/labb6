#para traerlaimagende mysql
FROM mysql:latest 
#setiar variabls que vausar sql enla instalacion

ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=root_password
#user y password para mysql
ENV MYSQL_USER=blog_user
ENV MYSQL_PASSWORD=blog_password

COPY schema.sql ./docker-entrypoint-initdb.d/