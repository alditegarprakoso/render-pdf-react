import React, { useEffect, useState } from 'react'


function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    setUsers(response)
  }
  return (
    <div>
      <table cellSpacing={10}>
        <tr>
          <td>ID</td>
          <td>Nama</td>
          <td>Aksi</td>
        </tr>
        {users.map((user, index)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <a href={`/render/${user.id}`}>PDF</a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Home