import axios from 'axios';
import CryptoJS from 'crypto-js';

const SECRET = import.meta.env.VITE_APP_SECRET_ENC;

const getProtectedData = async () => {
    const username =  import.meta.env.VITE_APP_USERNAME;
    const password =  import.meta.env.VITE_APP_PASSWORD;
    const token = btoa(`${username}:${password}`);
    try {
      const response = await axios.get(`${import.meta.env.VITE_JWT_URL}/api/v2/getToken`, {
        headers: {
          'Authorization': `Basic ${token}`
        }
      });

      const encryptedResponse =  decryptWithAES(response.data.data);
      return JSON.parse(encryptedResponse).outToken;
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
}
const decryptWithAES = (text:string) => {
    const encryptedHex = CryptoJS.enc.Hex.parse(text);
    const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex);
    const decrypted = CryptoJS.AES.decrypt(
        encryptedBase64,
        CryptoJS.enc.Utf8.parse(SECRET), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );
    const hexString = decrypted.toString(CryptoJS.enc.Utf8);
    return hexString;
};

export {
    getProtectedData
}