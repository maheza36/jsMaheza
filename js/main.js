console.log("Hola Mundo");
var saludar = function(estado){
  var is_not_number = Number.isNaN(estado);
  var strestado;
  if(is_not_number){
    strestado = estado.toLowerCase();
  }
  if(estado == "dia" || (strestado>=0 && strestado<=12)){
    console.log("Buenos Días");
  }
  else if (estado == "noche") {
    console.log("Buenas Noches");
  }
  else{
    console.log("Hola");
  }
};


var suerte = function(param){
  if(param === 7)
    console.log("Buena Suerte");
  else if(param === "13")
    console.log("Sentido Pésame");
};


var consecutivo = function(){
  var a = 0;
  while(a<10){
    //a=a+1;
    console.log(a+=1);
  }
};
