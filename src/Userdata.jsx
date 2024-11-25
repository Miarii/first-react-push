export default function Userdata({ user }) {
    const { name, email } = user;
    return (
      <div>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
      </div>
    );
  }
  