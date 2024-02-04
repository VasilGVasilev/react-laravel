**Laravel setup**
PHP as JS/Node.js does not come with its own local dev server, so popular choice is XAMPP.

Laravel does come with a development server. To install it you need composer package manager and global laravel installer (it is lightweight).

Laravel comes with vite config, but this config is to have a tight coupled BE and FE, it is optional. For this project, we will have decoupled BE for API calls via Laravel and FE via Vite and React.

**auto import**

auto import not working on vite -> setup a jsconfig.json file