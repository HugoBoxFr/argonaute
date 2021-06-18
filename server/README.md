# Install the project after clone

- composer install
### change .env.dist by .env and modify line 32 ###
- php bin/console doctrine:database:create
- php bin/console make:migration
- php bin/console doctrine:migrations:migrate
- php bin/console doctrine:fixtures:load


# start local server
- symfony server:start