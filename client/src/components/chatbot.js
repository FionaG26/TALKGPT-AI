import React, { useState } from "react";
import axios from "axios";

const Chatbot = () =>{
	  const [input, setInput] = useState("");
	  const [response, setResponse] = useState("");

	  const handleInputChange = (e) => {
		    setInput(e.target.value);
		  };
	
	const handleSubmit = async (e) => {
		    e.preventDefault();

		    try {
		      const response = await axios.post("/api/chatbot", { prompt: input });
	              setResponse(response.data.bot);
          	        } catch (error) {
					      console.log(error);
					    }
		  };

	  return (
		      <div>
		        <form onSubmit={handleSubmit}>
		          <input type="text" value={input} onChange={handleInputChange} />
		          <button type="submit">Submit</button>
		        </form>
		        {response && <p>{response}</p>}
		      </div>
		    );
};

export default Chatbot;
