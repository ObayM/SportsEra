import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  const { prompt } = await request.json();

  // Initialize the Gemini API client
  const genAI = new GoogleGenerativeAI('AIzaSyAaa7CaI4LzP8HUbKW6cV5k0ftuRnA4y5M');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    // Generate content using Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Return the generated recommendations
    return new Response(JSON.stringify({ recommendations: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return new Response(JSON.stringify({ error: 'Failed to get recommendations' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}