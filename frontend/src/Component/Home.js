import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  const [product, setproduct] = useState([]);
  const getData = async () => {
    let result = await fetch("http://localhost:3000/find");
    result = await result.json();
    setproduct(result);

  }
  // console.log("products" ,product);

  const handledelete = async(id) => {
    let result =await fetch(`http://localhost:3000/product/${id}`, {
      method: 'Delete'
    })

    result = await result.json();
    if (result) {
      getData();
    }

  }

  const navigate = useNavigate();

  const handleupdate = (id) => { 
     navigate(`/update/${id}`)
  }

  return (
    <div>

      <table>
        <tr>
          <td>S.no</td>
          <td>Name</td>
          <td>phone</td>
          <td>skill</td>
          <td>Company</td>
          <td>CHANGE</td>
          <td></td>
        </tr>


        {
          product.map((e, i) =>
            <tr  >
              <th >{i + 1}</th>
              <th>{e.name}</th>
              <th>{e.phone}</th>
              <th>{e.skill}</th>
              <th>{e.company}</th>
              <th><button onClick={() => handledelete(e._id)} >delete</button></th>
              <th><button onClick={() => handleupdate(e._id)} >Update</button></th>
            </tr>
          )
        }


      </table>



    </div>
  )
}

export default Home
