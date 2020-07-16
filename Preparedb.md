# Preparing the Database

Do the Following on MYSQL terminal

```sql
create database shoppingcart;
create user shopper identified by 'shoppass';
use shoppingcart;
grant all privileges on shoppingcart to shopper;
grant all privileges on shoppingcart.* to shopper;
```