import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {


  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    const auth = localStorage.getItem('users');
    if (auth) {
      navigate('/');
    }

  })


  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(name, password, email);

    let result = await fetch('http://localhost:3000/register', {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }

    })
    result = await result.json();
    localStorage.setItem('users', JSON.stringify(result));
    console.log(result);
    if (result) {
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
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Signup</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input placeholder="Enter your name " onChange={(e) => setname(e.target.value)} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Email</label>
                  <input placeholder="Enter your Email " onChange={(e) => setemail(e.target.value)} value={email} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Password</label>
                  <input placeholder="Enter your Password " onChange={(e) => setpassword(e.target.value)} value={password} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-full">
                <button onClick={handleSignup} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Signup</button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup
