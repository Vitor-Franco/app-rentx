import upload from "@config/upload";
import fs from "fs";
import { resolve } from "path";
import { IStorageProvider } from "../IStorageProvider";

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(upload.tmpFolder, file),
      resolve(`${upload.tmpFolder}/${folder}`, file)
    );

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

    try {
      // Valida se o arquivo existe
      await fs.promises.stat(filename);
    } catch {
      // Se não existir o arquivo, uma exceção será lançada.
      return;
    }

    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
