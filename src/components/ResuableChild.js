import { ref } from 'vue'
let baseUrl="https://jsonplaceholder.typicode.com"
export   function useFetch(url,obj=null){
    let error=ref(null)
    let data=ref(null)

    let res= fetch(`${baseUrl}/todos`)
    .then((res)=>res.json())
    .then((json)=>data.value=json);
    //  if(response.status=='success'){
      ;
    //  }else{
    //     data.error=response.message;

    //  }

    return {data,error}

}
