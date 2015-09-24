Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

    Template.body.helpers({
        /*
            tasks: [
                { text: "this is task 1"},
                { text: "this is task 2"},
                { text: "this is task 3"},
            ]
        */
        tasks: function() {
            return Tasks.find({});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
