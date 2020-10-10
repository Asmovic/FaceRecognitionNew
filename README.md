# laravel-mix-react-express

A boilerplate for Express with react packed with laravel mix.

This is a simple boilerplate you can use to run express server with react or vue in the front using [laravel-mix](https://laravel-mix.com/) as a packager.

With this you can leverage on the power bestowed on laravel by laravel-mix.

Good thing is that unlike create react app, where you cannot have multiple entry point, with this setup you can create multiple SPA and set it up however you like.

Small setup footprint with no webpack configuration and knowledge.

## Usage

Read the laravel-mix docs [here](https://laravel-mix.com/docs/4.0/installation)

Look into the package.json run `yarn dev` for development, with browserSync and hot reloading support and `yarn prod` for production build.

Do note that you have to edit the browserSync proxy setting in `webpack.mix.js` to march your development domain.

All frontend codes should be stored in client directory or anywhere you choose. Should you decide to change the directory however, please make necessary changes in index.js on the root of your express app and inside webpack.mix.js
