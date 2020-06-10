import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAppointmentsJudge1591736592645
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointmentsjudge',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'numberProcess',
            type: 'varchar',
          },

          {
            name: 'childrenName',
            type: 'varchar',
          },

          {
            name: 'judgeSentence',
            type: 'varchar',
          },

          {
            name: 'status',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointmentsjudge');
  }
}
