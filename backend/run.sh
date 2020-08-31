echo Copying the configuration example file
docker exec -it essentia-app cp .env.example .env

echo Install dependencies
docker exec -it essentia-app composer install

echo Make migrations
docker exec -it essentia-app php artisan migrate
