import { useState, useEffect } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className='deck-wrap'>

      <h1>UseEffect</h1>

      <div className='deck'>
        {users.map((user, i) => (
          <div key={i} className='card'>
            <a href="/" className='card-content'>
              <div className='card-title'>
                <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" className='bg-img' />
                <h5>
                  <strong></strong> {user.name}
                </h5>
              </div>
              <hr />
              <div className='card-details'>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Phone Number:</strong> {user.phone}
                </p>
                <p>
                  <strong>Website:</strong> {user.website}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
