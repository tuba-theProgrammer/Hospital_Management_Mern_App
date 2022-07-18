const CallToServer = (Server_url,requestType, requestRoute, requestData) => {
    return new Promise(async function (resolve, reject) {
      if (requestType == "GET") {
        fetch(`${Server_url}${requestRoute}`)
          .then((res) => res.json())
          .then((response) => {
            resolve(response);
          });
      } else if (requestType == "POST") {
       
          const response = await fetch(`${Server_url}${requestRoute}`, {
              method: 'POST', 
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
          
              },
              body: JSON.stringify(requestData) 
            });
            resolve(response)     
      }
    }).catch((error)=>{
        //reject(error);
    });
   
  };
  
  export { CallToServer};
  