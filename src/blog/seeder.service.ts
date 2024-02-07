import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async seed() {
    await this.dataSource.manager.upsert(
      User,
      [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          id: 2,
          firstName: 'Lana',
          lastName: 'Kane',
        },
        {
          id: 3,
          firstName: 'Peter',
          lastName: 'Parker',
        },
      ],
      ['id'],
    );
  }
}
