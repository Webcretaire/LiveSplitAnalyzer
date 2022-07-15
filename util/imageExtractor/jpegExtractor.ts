export const extractJpeg = (data: Uint8Array): Uint8Array|null => {      
    const HEX_FF = 255;
    const HEX_D8 = 216;
    const HEX_D9 = 217;
    
    let jpegStart = 0;
    let foundJpegStart = false;
    let i = 0;
  
    while (i < data.length - 1) {
      if (data[i++] != HEX_FF)
        continue;

      if (data[i++] == HEX_D8) {
        foundJpegStart = true;
        jpegStart = i - 2;
        break;
      }
    }
  
    if (!foundJpegStart)
      return null;

    while (i < data.length - 1) {
      if (data[i++] != HEX_FF)
        continue;

      if (data[i++] == HEX_D9) return data.slice(jpegStart, i); // Reached End Of Image
    }

    return null;
  };
  