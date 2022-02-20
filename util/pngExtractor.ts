export const extractPng = (base64data: string) => {
  const binaryData = atob(base64data); // Buffer.from(base64data, "base64").toString(); // atob(base64data);

  const len  = binaryData.length;
  const data = new Uint8Array(len);
  for (let i = 0; i < len; i++)
    data[i] = binaryData.charCodeAt(i);


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

  const IEND_CHUNK: Uint8Array = new Uint8Array([
    0x00, // Size (0)
    0x00,
    0x00,
    0x00,
    0x49, // Name (IEND)
    0x45,
    0x4e,
    0x44
  ]);

  let signatureCurIdx = 0, pngStart = 0;
  let foundPngStart   = false;
  let i;

  for (i = 0; i < data.length; ++i) {
    const b = data[i];
    if (b == PNG_SIGNATURE[signatureCurIdx]) {
      if (signatureCurIdx == 0) pngStart = i;
      if (signatureCurIdx == PNG_SIGNATURE.length - 1) {
        foundPngStart = true;
        console.log('Found beginning of PNG file at position ' + pngStart);
      } else {
        signatureCurIdx++;
      }
    } else {
      signatureCurIdx = 0;
    }

    if (foundPngStart) break;
  }

  if (!foundPngStart) {
    console.error('No PNG file in input data');
    return null;
  }

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
    console.log(`Got chunk ${name} of size ${size}`);

    i += size; // Chunk data
    i += 4; // CRC

    if (i > data.length) {
      console.error('OOB');
      return null;
    }
    if (name == 'IEND') break;
  }

  return data.slice(pngStart, i);
};
