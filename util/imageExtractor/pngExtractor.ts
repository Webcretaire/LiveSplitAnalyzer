export const extractPng = (data: Uint8Array): Uint8Array|null => {
  const PNG_SIGNATURE: Uint8Array = new Uint8Array([
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10
  ]);

  let signatureCurIdx = 0, pngStart = 0;
  let foundPngStart   = false;
  let i;

  for (i = 0; i < data.length; ++i) {
    const b = data[i];
    if (b == PNG_SIGNATURE[signatureCurIdx]) {
      if (signatureCurIdx == 0) pngStart = i;

      if (signatureCurIdx == PNG_SIGNATURE.length - 1)
        foundPngStart = true;
      else
        signatureCurIdx++;
    } else {
      signatureCurIdx = 0;
    }

    if (foundPngStart) break;
  }

  if (!foundPngStart)
    return null;

  for (; ;) {
    i += 4;

    // Endianness is bad, reverse Array
    let buf    = new Uint8Array([data[i], data[i - 1], data[i - 2], data[i - 3]]);
    const ar32 = new Uint32Array(
      buf.buffer,
      0,
      1
    );
    const size = ar32[0];

    i += 4;
    buf = new Uint8Array([data[i - 3], data[i - 2], data[i - 1], data[i]]);

    const name = new TextDecoder().decode(buf);

    i += size; // Chunk data
    i += 4; // CRC

    if (i > data.length)
      return null;

    if (name == 'IEND') break;
  }

  return data.slice(pngStart, i);
};
