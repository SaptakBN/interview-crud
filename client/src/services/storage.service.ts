import { AES, enc } from "crypto-js";
import { SliceEnum } from "@/enums";
import { STORAGE_SECRET } from "@/config";
import { LoginResponse } from "@/interfaces/login.interface";

class storageService {
  constructor() {}
  private readonly SECRET_KEY = STORAGE_SECRET;
  private readonly storage: Storage = localStorage;

  getInitialState(): LoginResponse | null {
    const data = this.storage.getItem(SliceEnum.AUTH);
    if (!data) return null;

    return this.decryptData(data);
  }

  setStorage<T>(value: T): void {
    const data = this.encryptData<T>(value);
    this.storage.setItem(SliceEnum.AUTH, data);
  }

  clearStorage(): void {
    this.storage.clear();
  }

  private encryptData<T>(data: T): string {
    const jsonData = JSON.stringify(data);
    return AES.encrypt(jsonData, this.SECRET_KEY).toString();
  }

  private decryptData(encryptedData: string): LoginResponse | null {
    try {
      const bytes = AES.decrypt(encryptedData, this.SECRET_KEY);
      const jsonData = bytes.toString(enc.Utf8);
      return JSON.parse(jsonData || "null");
    } catch (error) {
      console.log("Error occured: ", error);
      this.clearStorage();
      return null;
    }
  }
}

export const storage = new storageService();
