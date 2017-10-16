/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = "production";

console.log("generating minified bundle".blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.red);
    return 1;
  }
  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }
  if (jsonStats.hasWarnings) {
    console.log("webpack warnings: ".yellow);
    return jsonStats.warnings.map(warning => console.log(warning.yellow));
  }
  console.log(`stats: + ${stats}`);

  console.log("App compiled in prod and written to dist. hold on to your butts.".green);

  return 0;

});
