var $$ = Dom7;

var app  = new Framework7({
  root: '#app',
  id: 'com.modelo.app',
  name: 'Triade',  
  theme: 'ios', 
  routes: routes,
  sheet: {
    closeByOutsideClick: true
  },
  methods: {
    helperAlert: function(message) {
      app.dialog.alert(message);
    },
    helperSetSessionStorage: function(key, value){
      window.sessionStorage.setItem(key, value);
    },
    helperGetSessionStorage: function(key){
      var data = window.sessionStorage.getItem(key);
      return data;
    },
    helperRemoveSessionStorage: function(key){
      window.sessionStorage.removeItem(key);
    }
  }
});

var mainView = app.views.create('.view-main', {
  url: app.methods.helperGetSessionStorage("inicial") == 'home' ? '/' : '/bem-vindo/'
});

var functionTimeOut = '';

$$(document).on('page:init', function (e, page) {

  clearTimeout(functionTimeOut);

  if( page.name === "bem-vindo" ){
    app.methods.helperSetSessionStorage("inicial", "home");
    functionTimeOut = setTimeout(function(){
      app.router.navigate("/");      
    }, 3000);
  }
  if( page.name === "logout" ){
    functionTimeOut = setTimeout(function(){
      app.router.navigate("/");
    }, 3000);
  }
  
});