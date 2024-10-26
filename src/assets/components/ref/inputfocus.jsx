// InputFocus.jsx
import React, { useRef, useEffect } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Automatically focus on the username input field
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Username"
        name="username"
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
      />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default InputFocus;
