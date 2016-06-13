/**
 * Created by dmv on 6/10/16.
 */
Template.postsList.helpers({
    posts() {
        return Posts.find();
    }
});
