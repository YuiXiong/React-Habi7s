import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import axios from "axios";

function AllBoard(props) {
  const [board, setBoard] = useState([]);
  const [data, setData] = useState([""])

  useEffect(() => {
    console.log("get board");
    const fetchApi = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );    if (res.status === 200 || res.status === 201) {
      const data = await res.data;
      console.log("data", data);
      setData(data);
    }
  };
  fetchApi();
}, []);

  console.log("before mapping data :", data)
  const mapData= data.map((e) =>
  <div><button id ={e._id} >
    {/* key= {e._id} */}
    {e.name}
    </button></div> 
  )

  return (data ?
    (<Container>
       
        {mapData}
      
    </Container>) 
      : 
    (<Container>
       <div>Loading...</div>
    </Container>)
    )
}

export default AllBoard