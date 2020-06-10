import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAppointmentsFamily1591736725495
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointmentsfamily',

        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'motherName',
            type: 'varchar',
          },

          {
            name: 'fatherName',
            type: 'varchar',
          },

          {
            name: 'motherCPF',
            type: 'varchar',
          },

          {
            name: 'fatherCPF',
            type: 'varchar',
          },
          {
            name: 'motherRG',
            type: 'varchar',
          },
          {
            name: 'fatherRG',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },

          {
            name: 'motherCellPhone',
            type: 'varchar',
          },
          {
            name: 'fatherCellPhone',
            type: 'varchar',
          },
          {
            name: ' residencePhone',
            type: 'varchar',
          },
          {
            name: ' civilSituation',
            type: 'varchar',
          },

          {
            name: ' perCapitaIncome',
            type: 'varchar',
          },

          {
            name: ' dependents',
            type: 'varchar',
          },

          {
            name: ' childAdopt',
            type: 'varchar',
          },
          {
            name: ' childrenHistoric',
            type: 'varchar',
          },
          {
            name: ' documentationAdoption',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointmentsfamily');
  }
}
