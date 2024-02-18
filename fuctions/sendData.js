export const sendData = async (formData) => {
    // e.preventDefault();
    let res;
    try {
      res = await fetch('https://mahercp.net/dashboard/api/cv',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
            'Accept-Language': '*',
            'lang': 'ar',
          }
      })
      console.log(res)
      if(res.ok){
        console.log("Success!")
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
    
    return res.json();
  }