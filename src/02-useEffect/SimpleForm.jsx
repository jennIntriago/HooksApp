import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "jenn",
    email: "jenn@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect called!");
  }, []);

  // Este Hook se dispara cada vez que cambia el formulario
  useEffect(() => {
    console.log("FormState changed!");
  }, [formState]);

  // Este Hook se dispara cada vez que cambia el EMAIL
  useEffect(() => {
    console.log("EMAIL changed!");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="jenn@jenn.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
