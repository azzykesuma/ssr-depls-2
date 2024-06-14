import { getProtectedData } from "./crypto";

export async function getToken() {
    const token = await getProtectedData();
    return token;
  }