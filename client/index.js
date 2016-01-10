Template.index.events({
    'click #logout': function(event){
    	Meteor.logout(function(){
    		FlashMessages.sendSuccess("Loged out");
    	});
    },
    'click #destroy-all': function(event){
    	Meteor.call("removeAllUsers");
    }
});
