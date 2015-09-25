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
            return Tasks.find({}, {sort: {createdAT: -1}});
        }
    });

    Template.body.events({
        "submit .new-task" : function (event) {

            // console.log("event", event);
            // console.log("event.target", event.target);
            // console.log("event.target.text", event.target.text);
            event.preventDefault();

            if(JSON) {
                //console.log("json");
                //console.log("JSON.stringify", JSON.stringify);
                //console.log(JSON.stringify({name:"bob"}));
                console.log(JSON.stringify(event.target));
                //console.log(event.target);
                window.myob = event; // console.log(myob);

            } else {
                console.log("no json");
            }

            var text = event.target.text.value;

            Tasks.insert({
                text: text,
                createdAt: new Date()
            });

            event.target.text.value = "";
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
