import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
const Update = () => {

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [skill, setskill] = useState('');
  const [company, setcompany] = useState('');
  // const navigate = useNavigate();

  const params = useParams();  
  
  useEffect(() => {
    // console.log("prd", params);cd 
    getupdate();
  });

  const getupdate = async() => { 
   
    // console.log("prd", params);
    let result = await fetch(`http://localhost:3000/product/${params.id}`);
    result = await result.json();
    setname(result.name);
    setphone(result.phone);
    setskill(result.skill);
    setcompany(result.company);


  }
 
  const handleUpdate = async (e) => { 
    e.preventDefault();
    console.log(name, phone, skill, company);

       let result = await fetch(`http://localhost:3000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, phone, skill, company }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    result = await result.json();
    console.log(result);


    
  }

  

  return (
    <div>
      
      
 
      {/* <input type="text" placeholder="Enter your name " onChange={(e)=> setname(e.target.value)} value={name}  />
      <input type="text" placeholder="Enter your phone " onChange={(e)=> setphone(e.target.value)} value={phone}  />
      <input type="text" placeholder="Enter your skill "  onChange={(e)=> setskill(e.target.value)} value={skill}  />
      <input type="text" placeholder="Enter your company " onChange={(e) => setcompany(e.target.value)} value={company} />
      
      <button onClick={handleUpdate}>Update</button>   */}



      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Product</h1>
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
                  <input onChange={(e)=> setphone(e.target.value)} value={phone}   placeholder="Enter your phone " type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                  <input  onChange={(e) => setcompany(e.target.value)} value={company}  placeholder="Enter your company " type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>


              <div className="p-2 w-full">
                <button onClick={handleUpdate} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
              </div>

            </div>
          </div>
        </div>
      </section>


      
    </div>
  )
}

export default Update
