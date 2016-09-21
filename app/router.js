import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('about');
  this.route('memories');
  this.route('all-memories');
  this.route('memory');
  this.route('new-memory');
  this.route('update', { path: '/update/:update_id'});
});

export default Router;
