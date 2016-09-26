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
  this.route('memory', {path: '/memories/:id'});
  this.route('new-memory');
  this.route('update', { path: '/update/:id'});
  this.route('user-memory');
  this.route('admin');
  this.route('admin-memories');
});

export default Router;
