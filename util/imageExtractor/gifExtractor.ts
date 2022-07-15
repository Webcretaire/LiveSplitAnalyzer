const bitAt = (byte: number, pos: number): number => (byte & (1 << pos)) ? 1 : 0;

export const extractGif = (data: Uint8Array): Uint8Array|null => {
  const GIF_SIGNATURE: Uint8Array = new Uint8Array([
    71,
    73,
    70,
    56
  ]);

  let signatureCurIdx = 0, gifStart = 0;
  let foundGifStart   = false;
  let i;

  for (i = 0; i < data.length; ++i) {
    const b = data[i];
    if (b == GIF_SIGNATURE[signatureCurIdx]) {
      if (signatureCurIdx == 0) gifStart = i;

      if (signatureCurIdx == GIF_SIGNATURE.length - 1) {
        // Look at last 2 bytes of the version
        if (data[i + 1] != 55 && data[i + 1] != 57 || data[i + 2] != 97) {
          signatureCurIdx = 0;
          continue;
        }

        foundGifStart = true;
      } else {
        signatureCurIdx++;
      }
    } else {
      signatureCurIdx = 0;
    }

    if (foundGifStart) break;
  }

  if (!foundGifStart)
    return null;

  i += 3; // Skip end of signature (end of version)

  i += 4; // Skip start of screen descriptor (width and height)

  const hasGlobalColorMap = data[i] & (1 << 7);
  // 3 bit number
  const colorRes =  4 * bitAt(data[i], 2) + 2 * bitAt(data[i], 1) + bitAt(data[i], 0);

  i += 3; // Skip end of screen descriptor

  if (hasGlobalColorMap)
    i += 3 * Math.round(Math.pow(2, colorRes + 1)); // Skip color map

  while (i < data.length) {
    switch (data[i]) {
      case 59:
        return data.slice(gifStart, i);
      case 33:
        i += 2;
        do {
          i += data[i] + 1; // Skip current size byte + all the data
        } while (data[i] != 0 && i < data.length);
        ++i;
        break;
      case 44:
        i += 9; // Current byte + Image position and size (4 * 2 bytes)

        const hasLocalColorMap = data[i] & (1 << 7);
        // 3 bit number
        const colorRes =  4 * bitAt(data[i], 2) + 2 * bitAt(data[i], 1) + bitAt(data[i], 0);

        ++i;

        if (hasLocalColorMap)
          i += 3 * Math.round(Math.pow(2, colorRes + 1)); // Skip color map

        ++i; // Skip LZW thinggies

        do { // Loop over sub-blocks of image data
          i += data[i] + 1; // Current index is the size, so skip over that + current byte
        } while (data[i] != 0); // Subblock list ends when we get a 0 byte

        ++i; // Skip over current 0 byte

        break;
      default:
        return null;
    }
  }

  return null;
};
  