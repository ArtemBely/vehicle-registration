SWAGGER_FILE=http://localhost:5284/swagger/v1/swagger.json
npx @openapitools/openapi-generator-cli generate -i $SWAGGER_FILE -g typescript-axios -o ./src/generated-api
