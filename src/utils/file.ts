import fs from 'fs';
// TODO - Add images to db
export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {}
  await fs.promises.unlink(filename);
};
