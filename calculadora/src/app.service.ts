import { Injectable } from '@nestjs/common';

@Injectable() //Decorador
export class AppService {
  getHello(): string {
    // console.log('log!');
    // console.info('info!');
    // console.debug('debug!');
    console.error('error!');
    console.warn('warn!');
    return 'Hello World!!';
  }
}
