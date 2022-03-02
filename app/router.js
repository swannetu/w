import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ex1');
  this.route('testNew');
  this.route('testList');
  this.route('contacts', function () {
    this.route('update', {path: 'update/:contact_id'});
  });
});
