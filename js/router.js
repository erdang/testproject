
   var router=function(routes){

       var ac=[];
       var def={
           type:'!'
       };

       if(!routes || typeof routes !== 'object') return;
       else{
           parseRouter(routes);
       }

       function parseRouter(routes){

           for(var i in routes){

               if( typeof i == 'string' && typeof routes[i] == 'function'){
                   ac.push({
                       path:i,
                       fn:routes[i]
                   });
               }
           }

       }

       $(window).bind('hashchange', function(ev) {
           var originEvent = ev.originalEvent,
               newUrl = originEvent.newURL,
               oldUrl = originEvent.oldURL;

           checkHash(newUrl)
       });

       function checkHash(url){
           var hasha=url.replace(/^[^#]*/,'');
           //console.log(hasha);
           if(hasha[1] != def.type){
               return '';
           }
           var u=hasha.slice(2);
           var hash = u || "index";
           $(ac).each(function(i, router) {
               if (router.path == hash) {
                   router.fn();
               }
           })
       }
       routes.init();
       checkHash(window.location.hash);

    }


