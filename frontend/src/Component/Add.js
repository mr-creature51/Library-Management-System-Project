import React, {   useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
   
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [skill, setskill] = useState();
  const [company, setcompany] = useState();
  const navigate = useNavigate();

   
 
  const handleadd = async (e) => { 
    e.preventDefault();
    console.log(name , phone, skill , company);
    
    let userID =  JSON.parse(localStorage.getItem('users'))._id;

    let result = await fetch('http://localhost:3000/addproduct', {
      method: "post",
      body: JSON.stringify({ name, phone, skill , company , userID }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    result = await result.json();
       console.log(result);
       const auth = localStorage.getItem('users');
       if (auth) { 
         navigate('/');
       }
   
    else { 
      alert("Please enter a correct data");
    }
    

  }
  

  return (
    <div>
      

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Product</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input onChange={(e)=> setname(e.target.value)} value={name}  placeholder="Enter book Name " type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">phone</label>
                  <input onChange={(e)=> setphone(e.target.value)} value={phone} placeholder="Enter your phone " type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">skill</label>
                  <input  onChange={(e)=> setskill(e.target.value)} value={skill}   placeholder="Enter your skill " type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">Company</label>
                  <input  onChange={(e) => setcompany(e.target.value)} value={company} placeholder="Enter your company " type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>


              <div className="p-2 w-full">
                <button onClick={handleadd} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">ADD</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Add
