
    var spinner=(function (){

        var count=0;

    
      var  up=function(){
            return ++count;
        };
      var down=function  (){
            return --count;
        }
return {
    up:up,
    down:down
}
})();

   
    
   
