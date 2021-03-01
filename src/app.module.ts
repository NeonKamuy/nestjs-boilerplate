import { Module } from 'src/controllers/example/node_modules/@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ExampleController } from './controllers/example';
import TYPES from './types';
import ExampleModel from './models/example';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../front/build'),
    }),
  ],
  controllers: [ExampleController],
  providers: [{ provide: TYPES.Models.Example, useValue: ExampleModel }],
})
export class AppModule { }