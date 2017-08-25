@servers(['web' => ['mampirin@128.199.126.203']])

@setup
 $base_path = '/home/mampirin/web';
 $working_dir = $base_path.'/'.(isset($path) ? $path : $branch);
@endsetup

@task('setup')
# go to working directory
cd {{ $base_path }}

# clone repositories
if [ ! -d {{ $working_dir }} ]; then
    git clone -b {{ $branch }} git@github.com:hrmshandy/mampir.in.git {{ $working_dir }} && cd {{ $working_dir }}
else
    cd {{ $working_dir }}
fi

# installing composer
composer install

# storage permission
chmod 777 -R storage

# copy .env file
cp .env.example .env

# config .env file
@if(isset($db_database))
    sed -i "/DB_DATABASE=/c\DB_DATABASE={{ $db_database }}" {{ $working_dir }}/.env
@endif
@if(isset($db_username))
    sed -i "/DB_USERNAME=/c\DB_USERNAME={{ $db_username }}" {{ $working_dir }}/.env
@endif
@if(isset($db_password))
    sed -i "/DB_PASSWORD=/c\DB_PASSWORD={{ $db_password }}" {{ $working_dir }}/.env
@endif

# generate key
php artisan key:generate

# migrate database
php artisan migrate

# install package
npm install

# build asset
npm run prod

@endtask

@task('deploy')
cd {{ $working_dir }}

@if(isset($rh))
    git reset --hard HEAD
@endif

git pull origin {{ $branch }}

@if(isset($c))
    composer update
@endif

@if(isset($npmi))
    npm install
@endif

@if(isset($npm))
    npm run prod
@endif

@if(isset($npmop))
    npm run prod-operator
@endif

@if(isset($npmadm))
    npm run prod-admin
@endif

php artisan migrate

@endtask
