import {extractJpeg} from './jpegExtractor';
import {extractPng}  from './pngExtractor';

export class ImageExtractor {
  base64Image: Uint8Array | null = null;
  
  mimeType: string | null = null;

  constructor(base64data: string) {
    if (this.base64Image = extractPng(base64data))
      this.mimeType = 'image/png';
    else if (this.base64Image = extractJpeg(base64data))
      this.mimeType = 'image/jpeg';
  }

  get imgSrc() {
    return this.base64Image 
      ? `data:${this.mimeType};base64,${btoa(new Uint8Array(this.base64Image).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      : '';
  }
}