export const extractJpeg = (base64data: string): Uint8Array|null => {
    const binaryData = atob(base64data);
  
    const len  = binaryData.length;
    const data = new Uint8Array(len);
    for (let j = 0; j < len; j++)
      data[j] = binaryData.charCodeAt(j);
      
    const HEX_FF = 255;
    const HEX_D8 = 216;
    const HEX_D9 = 217;
    
    let jpegStart = 0;
    let foundJpegStart = false;
    let i = 0;
  
    while (i < data.length - 1) {
      if (data[i++] != HEX_FF) {
        continue;
      }

      if (data[i++] == HEX_D8) {
        foundJpegStart = true;
        jpegStart = i - 2;
        break;
      }
    }
  
    if (!foundJpegStart)
      return null;
  
    while (i < data.length - 1) {
      if (data[i++] != HEX_FF) {
        continue;
      }

      if (data[i++] == HEX_D9) return data.slice(jpegStart, i); // Reached End Of Image
    }

    return null;
  };
  