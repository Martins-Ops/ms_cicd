import { useEffect, useState } from "react"


function App() {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    (
     async () => {
         try{
          setLoading(true);

          const response = await fetch(import.meta.env.VITE_APP_BACKEND_URL);
          const responseData = await response.text();
          setData(responseData);

         }
         catch(error){
           
            let message = 'Something went wrong'

            if(error instanceof Error) {
               message = error.message;               
            }

            window.alert(message);

         }
         finally{
          setLoading(false);
         }
     }
    )()

  },[])


  return (
    <div className="">
      <h1>Talent Plus</h1>
     <div className="container">
      {
        loading ? "Loading" : data
      }
     </div>
    </div>
  )
}

export default App
