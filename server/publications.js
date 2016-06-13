/**
 * Created by dmv on 6/13/16.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});