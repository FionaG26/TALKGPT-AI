from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = "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"

# Define a route for the chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    # Get the user's message from the request
    user_message = request.json["message"]

    # Send the user's message to the ChatGPT model
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=user_message,
        max_tokens=50,
        temperature=0.8,
        n=1,
        stop=None,
        top_p=None,
        frequency_penalty=None,
        presence_penalty=None
    )

    # Get the generated response from the model
    chat_response = response.choices[0].text.strip()

    # Return the response to the frontend
    return jsonify({"message": chat_response})

if __name__ == "__main__":
    app.run()
