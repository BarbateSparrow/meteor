/**
 * Created by dmv on 6/10/16.
 */
Posts = new Mongo.Collection('posts');
Posts.allow({
    insert: function (userId, doc) {
        return !! userId;
    }
});