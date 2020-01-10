import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleLoaderService {

  constructor() { }

  private loadedFiles = new Set<string>();

  loadScript(src: string): Promise<void> {

    if (this.loadedFiles.has(src)) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        this.loadedFiles.add(src);
        resolve();
      };
      script.onerror = () => {
        reject();
      };
      document.body.appendChild(script);
    });
  }

}
