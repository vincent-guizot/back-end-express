# one-to-many and many-to-many

## Sequelize Script

```bash
npx sequelize-cli model:generate --name company --attributes name:string,category:string,image:string

npx sequelize-cli model:generate --name product --attributes name:string,price:integer,stock:integer,type:string,image:string,companyId:integer

npx sequelize-cli model:generate --name profile --attributes address:string,city:string,revenue:integer,companyId:integer

npx sequelize-cli model:generate --name productIngredient --attributes productId:integer,ingredientId:integer

npx sequelize-cli model:generate --name ingredient --attributes name:string

```
