import { useState } from "react";
const HomeWork1 = () => {
    const[array, setArray] = useState([
        {id:1, name:'John', email:'john@gmail.com'},
        {id:2, name:'Jane', email:'jane@gmail.com'}
    ])

    const [newId, setNewId] = useState('')
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {id:  newId, name: newName, email:  newEmail}
        const existingUser = array.find((user) => user.id === newUser.id);

        if(!existingUser) {
            setArray([...array, newUser])
            setNewId('')
            setNewName('')
            setNewEmail('')
        } else {
            alert('User ID already exists!!!')
        }
    }

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h2>Users List:</h2>
            <div style={{ overflowX: "auto" }}>
            <table border="solid" style={{ borderCollapse: "collapse", width: "100%" }}>
            <tr>
                <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left", backgroundColor: "#f0f0f0" }}>ID</th>
                <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left", backgroundColor: "#f0f0f0" }}>Name</th>
                <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left", backgroundColor: "#f0f0f0" }}>Email</th>
            </tr>
            {array.map((user) => (
            <tr key={user.id}>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>{user.id}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>{user.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>{user.email}</td>
            </tr>
            ))}
            </table> <br /> <br />
        </div>

            <form onSubmit={handleSubmit}>
                <label style={{ display: "block", marginBottom: "10px" }}>
                    Enter ID:
                    <input
                        type="number"
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                        required
                        style={{ padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
                    />
                </label>
                
                <label style={{ display: "block", marginBottom: "10px" }}>
                    Enter Name:
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                        style={{ padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
                    />
                </label>

                <label style={{ display: "block", marginBottom: "10px" }}>
                    Enter Email:
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        required
                        style={{ padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
                    />
                </label>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#029DA3",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    > Add New </button>
            </form>
        </div>
    )
}
export default HomeWork1