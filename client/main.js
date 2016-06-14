Meteor.startup(() => {
    Tracker.autorun(function () {
        console.log('There are ' + Posts.find().count() + ' posts');
    });
});