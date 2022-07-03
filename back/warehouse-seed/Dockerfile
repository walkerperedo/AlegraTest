FROM mongo:latest

COPY ingredients.json /ingredients.json

CMD mongoimport --host nosql-db --db bodega --collection warehouse --type json --file /ingredients.json --jsonArray
