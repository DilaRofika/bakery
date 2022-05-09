# Getting Started with Sequelize-cli

npx sequelize-cli model:generate --name User --attributes name:string
npx sequelize-cli model:generate --name Item --attributes name:string,UserId:integer,BrandId:integer,price:integer,image:string
npx sequelize-cli model:generate --name Brand --attributes name:string,image:string

npx sequelize-cli db:migrate