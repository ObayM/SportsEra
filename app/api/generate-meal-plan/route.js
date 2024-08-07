import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI('AIzaSyAaa7CaI4LzP8HUbKW6cV5k0ftuRnA4y5M');

export async function POST(request) {
  try {
    const { sport } = await request.json();

    if (!sport) {
      return NextResponse.json({ message: 'Sport is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Generate a healthy meal plan for a ${sport} athlete. Include breakfast, lunch, dinner, and a snack. Format the response as a JSON object with meal types as keys and arrays of meal suggestions as values. Provide only the JSON object without any additional text or formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    console.log('Raw API response:', text);

    // Remove any non-JSON content
    text = text.replace(/^[\s\S]*?(\{[\s\S]*\})[\s\S]*$/, '$1');

    console.log('Cleaned response:', text);

    try {
      const mealPlan = JSON.parse(text);
      return NextResponse.json({ mealPlan });
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return NextResponse.json({ message: 'Invalid JSON response from API', rawResponse: text }, { status: 500 });
    }
  } catch (error) {
    console.error('Error generating meal plan:', error);
    return NextResponse.json({ message: 'Failed to generate meal plan', error: error.message }, { status: 500 });
  }
}
// AIzaSyAaa7CaI4LzP8HUbKW6cV5k0ftuRnA4y5M