FROM mongo:latest

COPY recipes.json /recipes.json

CMD mongoimport --host nosql-db --db bodega --collection recipes --type json --file /recipes.json --jsonArray

