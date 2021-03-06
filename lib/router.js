/**
 * Created by dmv on 6/14/16.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.map(function() {
    this.route('postsList', {path: '/'});
    this.route('postPage', {
        path: 'posts/:_id',
        data: function () {
            return Posts.findOne(this.params._id);
        }
    });
    this.route('postSubmit', {path: '/submit'});
});

var requireLogin = function() {
    if(!Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
}

Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});