//---------   main routes ------------ //
Router.configure({layoutTemplate: 'index'});

Router.route('/',{
	template: "home",
	name: "home"
});


//---------     users     ------------ //
Router.route('/newUser');
Router.route('/login');
Router.route('/recover');
Router.route('/reset/:token',{
  template: "reset",
  name:     "reset",
  onBeforeAction: function(){
    resetToken = this.params.token;
    this.next();
  }
});


//---------     note    ------------ //
/*

   Try to keep the names unified
   attempt to give the same value to 
                - route
                - template
                - name
                - javascript file 

*/
