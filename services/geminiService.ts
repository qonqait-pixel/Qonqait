
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateMetaDescription(title: string, content: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a high-converting, SEO-optimized meta description (max 160 chars) for an enterprise blog post titled "${title}" with content summary: ${content.substring(0, 300)}...`,
      });
      return response.text || "Failed to generate meta description.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Meta generation unavailable.";
    }
  }

  async suggestBlogTags(content: string): Promise<string[]> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Extract 5 relevant enterprise tech tags for this content: ${content.substring(0, 500)}`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });
      return JSON.parse(response.text || "[]");
    } catch (error) {
      return ["AI", "Transformation", "Enterprise"];
    }
  }
}

export const gemini = new GeminiService();
