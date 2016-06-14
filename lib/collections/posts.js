/**
 * Created by dmv on 6/10/16.
 */
Posts = new Mongo.Collection('posts');

/** Ignored by Meteor.method();*/
// Posts.allow({
//     insert: function (userId, doc) {
//         return !! userId;
//     }
// });

Meteor.methods({
    postInsert: function (postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            url: String,
            title: String
        });
        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if(postWithSameLink) return {
          postExist: true,
            _id: postWithSameLink._id
        };
        var user = Meteor.userId();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});