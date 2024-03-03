const  express = require("express");
const  router = express.Router();
const fs =  require('fs').promises
const moment = require("moment")
// const pu =[]
// setInterval(inspect, 15000);

function inspect() { 
  console.log("inspect")
fs. readFile("./src/database/userTimes.json")
.then((data) => {

const userTimes = JSON.parse(data)
const nowTime =  moment().format('yyyy-MM-DD hh:mm')



 fs. readFile("./src/database/userGoodsKinds.json")
.then((data) => {  
   
  const userGoodsKinds = JSON.parse(data)

  if(userTimes[0] !== undefined) {
           
        for(var m =0; m<userTimes.length ; m ++) { /// 시간이 지나면 파일 삭제
          console.log(userTimes[m].UseTime.length, userTimes[m].goods)
              if(userTimes[m].UseTime.length <=0 && userTimes[m].goods[0] === "Y") {
               
                userTimes.splice(m, 1);
                   userGoodsKinds.splice(m, 1);
            
                        fs.writeFile("./src/database/userTimes.json", JSON.stringify(userTimes) , 'utf8' , (err) => {
                              if (err) throw err;
                                 console.log("err") 
                                 
                               })
                               fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
                                if (err) throw err;
                                   console.log("err") 
                                   
                                 })
  
                           }

                     }
      }
        
   

  

 
  // function next() {
  //   return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //   if(resolve) {
      
  //                    for(var u=0; u<userGoodsKinds.length; u ++) {
                   
  //                       if(userTimes[u] === undefined && userGoodsKinds[u].goods === "Y") {
                       
  //                        userTimes.push({"id": userGoodsKinds[u].id ,"name":userGoodsKinds[u].name, "cdId": userGoodsKinds[u].cdId,
  //                           "phon":userGoodsKinds[u].phon, "wonset":userGoodsKinds[u].wonset ,
  //                           "UseTime":userGoodsKinds[u].UseTime , "goodsName":userGoodsKinds[u].goodsName,
  //                           "benchName":userGoodsKinds[u].benchName,"expiryName":userGoodsKinds[u].expiryName,
  //                           "loginStart": userGoodsKinds[u].loginStart, "logoutEnd" : userGoodsKinds[u].logoutEnd,
  //                            "koko":userGoodsKinds[u].koko, "goods":userGoodsKinds[u].goods})
                           
  //                           fs.writeFile("./src/database/userTimes.json",JSON.stringify(userTimes))
  //                           break;
  //                      }
                       
                      

  //                  }  
                    
  //       resolve();
      
  
           
               
  //       resolve();
  //   } else {
  //       reject();

  //   }
  //  },300);
  //   });}
   
    function next_3(){
     
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        
       if(resolve) {
       
        for(var q = 0; q<userTimes.length; q ++) {
               
          for(var b = 0; b<userTimes[q].UseTime.length; b ++)  {
            
                 if(userTimes[0].goodsName[b] !== "") { 
                 
                if(userTimes[q].expiryName[b] < nowTime   ) {
                  
            
                  userTimes[q].wonset.splice([b],1)
                  userTimes[q].UseTime.splice([b],1)
                  userTimes[q].loginStart.splice([b],1)
                  userTimes[q].goodsName.splice([b],1) 
                  userTimes[q].benchName.splice([b],1)
                  userTimes[q].expiryName.splice([b],1)
                  userTimes[q].logoutEnd.splice([b],1)
                  userTimes[q].koko.splice([b],1)
                  
                     fs.writeFile("./src/database/userTimes.json", JSON.stringify(userTimes) , 'utf8' , (err) => {
                      if (err) throw err;
                         console.log("err") 
                         
                       })
              
                    }else if( userTimes[q].UseTime[b] < 0 ) {
                       
                      var newUserGoodsKinds = userGoodsKinds.filter(function (addSave) { return addSave.id === userTimes[q].id });
                
           
                     
                      userTimes[q].wonset.splice([b],1)
                      userTimes[q].UseTime.splice([b],1)
                      userTimes[q].loginStart.splice([b],1)
                      userTimes[q].goodsName.splice([b],1) 
                      userTimes[q].benchName.splice([b],1)
                      userTimes[q].expiryName.splice([b],1)
                      userTimes[q].logoutEnd.splice([b],1)
                      userTimes[q].koko.splice([b],1)
           
   
             
          
           fs.writeFile("./src/database/userTimes.json", JSON.stringify(userTimes) , 'utf8' , (err) => {
            if (err) throw err;
               console.log("err") 
               
             })
        
        
                    }
             
     
            
          }
         
        }
        
      }
        }
          else{
          reject("배달 실패");
                  }
          resolve();
      },300);
      });}

    function next_2() {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(resolve) {


          
          for(var q = 0; q<userTimes.length; q ++) {
            
            for(var b = 0; b<userTimes[q].UseTime.length; b ++)  {
              
              
              if(userTimes[q].loginStart[b] !== "") { 
                const nowTime =  moment().format('yyyy-MM-DD hh:mm')
                const dateB = moment(`${nowTime}`);
                const login =   userTimes[q].loginStart[b]
          
               
                 const nexetTime= dateB.diff(login, 'minute')
        
                          
                const kk = userTimes[q].UseTime[b] - nexetTime
             
               
                userTimes[q].UseTime[b] = kk
                userTimes[q].loginStart[b] = nowTime
                
                   
              }
              
            }
            
          }
       
          
            fs.writeFile("./src/database/userTimes.json", JSON.stringify(userTimes) , 'utf8' , (err) => {
                  if (err) throw err;
                     console.log("err") 
                     
                   })
    
        }else{
          reject("배달 실패");
                  }
      
      
      },300);
        });
    

    }

          
      
        next_3().then(() =>{return next_2()})
              
  
          
  
   
         
})



})

}



  
module.exports = router 