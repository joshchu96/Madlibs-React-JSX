import { useState } from "react";
import Response from "./Response";

export default function InputForm() {
  const DEFAULT_INPUTS = {
    noun: "",
    noun2: "",
    adj: "",
    color: "",
  };

  const [input, setInput] = useState(DEFAULT_INPUTS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setInput((currentInput) => ({
      ...currentInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const handleRestart = () => {
    setInput(DEFAULT_INPUTS);
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="noun"
              name="noun"
              type="text"
              placeholder="noun"
              value={input.noun}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="noun2"
              name="noun2"
              type="text"
              placeholder="noun2"
              value={input.noun2}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="adj"
              name="adj"
              type="text"
              placeholder="adjective"
              value={input.adj}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="color"
              name="color"
              type="text"
              placeholder="color"
              value={input.color}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Get Story</button>
        </form>
      ) : (
        <div>
          <Response input={input} />
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </>
  );
}
