const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const configuration = new Configuration({
	  apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/api/chatbot", async (req, res) => {
	  try {
		      const prompt = req.body.prompt;
		      const response = await openai.createCompletion({
			            model: "text-davinci-003",
			            prompt: prompt,
			            temperature: 0.7,
			            max_tokens: 50,
			          });
		      res.status(200).send({ bot: response.data.choices[0].text });
		    } catch (error) {
			        console.log(error);
			        res.status(500).send({ error });
			      }
});

app.listen(3001, () =>
	  console.log("Server is running on http://localhost:3001")
);
