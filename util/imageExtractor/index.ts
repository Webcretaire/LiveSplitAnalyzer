import {extractJpeg} from './jpegExtractor';
import {extractPng}  from './pngExtractor';
import {extractGif}  from './gifExtractor';

export class ImageExtractor {
  base64Image: Uint8Array | null = null;

  mimeType: string | null = null;

  constructor(base64data: string) {
    const binaryData = atob(base64data);

    const len  = binaryData.length;
    const data = new Uint8Array(len);
    for (let j = 0; j < len; j++)
      data[j] = binaryData.charCodeAt(j);

    if (this.base64Image = extractPng(data))
      this.mimeType = 'image/png';  
    else if (this.base64Image = extractGif(data))
      this.mimeType = 'image/gif';
    else if (this.base64Image = extractJpeg(data))
      this.mimeType = 'image/jpeg';
  }

  get imgSrc() {
    return this.base64Image 
      ? `data:${this.mimeType};base64,${btoa(new Uint8Array(this.base64Image).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      : '';
  }
}