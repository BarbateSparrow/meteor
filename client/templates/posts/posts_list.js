/**
 * Created by dmv on 6/10/16.
 */
// var postsData = [
//     {
//         title: 'Introducing Telescope',
//         url: 'http://sachagreif.com/introducing-telescope/'
//     },
//     {
//         title: 'Meteor',
//         url: 'http://meteor.com'
//     },
//     {
//         title: 'The Meteor Book',
//         url: 'http://themeteorbook.com'
//     }
// ];

Template.postsList.helpers({
    posts() {
        return Posts.find();
    }
});
