import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
  vertexai: false
});

async function runAgent() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'Write a short greeting message for a user.'
    });

    // Properly access the returned text
    const output =
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      'No text returned';

    console.log('AI Output:', output);

  } catch (err) {
    console.error('Error generating content:', err);
  }
}

runAgent();

