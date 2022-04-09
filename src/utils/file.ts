import fs from "fs";

export const deleteFile = async (fileName: string) => {
  try {
    // Valida se o arquivo existe
    await fs.promises.stat(fileName);
  } catch {
    // Se não existir o arquivo, uma exceção será lançada.
    return;
  }

  // Remove o arquivo existente.
  await fs.promises.unlink(fileName);
};
