/**
 * Created by dmv on 6/13/16.
 */


if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introduction Telescope',
        url: 'http://sachagreif.com/introducing-telescope'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The meteor Book',
        url: 'http://themeteorbook.com'
    });
}