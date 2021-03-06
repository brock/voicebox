voiceBox.addResponder(/Hi|hello|hey/i, function(){
  voiceBox.respond('Hello')
})

voiceBox.addResponder(/My name is (\w+)/i, function(){
  var name = RegExp.$1;
  storeName(name);
  voiceBox.respond("Hello "+name+", It's nice to meet you.")
})

voiceBox.addResponder(/Call me (\w+)/i, function(){
  var name = RegExp.$1;
  storeName(name);
  voiceBox.respond("Ok I will call you "+name+" from now on")
})

voiceBox.addResponder(/What's my name/i, function(){
  var name = voiceBox.db.get('users_name');
  if ( name ){
    voiceBox.respond('Your name is '+name)
  }else{
    voiceBox.respond("You haven't told me your name")
  }
})

function storeName(name){
  voiceBox.db.set('users_name', name);
}
