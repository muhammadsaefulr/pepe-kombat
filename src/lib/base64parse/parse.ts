import { Buffer } from 'buffer';

export const parseSupabaseCookie = (cookieString: string) => {
  try {
    const decodedCookie = Buffer.from(cookieString, 'base64').toString('utf-8');
    return JSON.parse(decodedCookie);
  } catch (error) {
    console.error('Failed to decode and parse cookie', error);
    return null;
  }
};