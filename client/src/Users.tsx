import React, {useEffect, useState} from 'react';


interface User {
    id: number,
    name: string
}

function Users() {

    const [users, setUsers] = useState([] as User[]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("http://localhost:3000/users", {})
            setUsers([{"id": 1, "name": "user1"}, {"id": 2, "name": "user2"}])

        }

        fetchUsers()
    }, [])

    return (
        <div style={{display: "flex"}}>
            <div style={{margin: "auto", textAlign: "center"}}>
                Users :
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user: User) => {
                            return (
                                <>
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                    </tr>
                                </>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
