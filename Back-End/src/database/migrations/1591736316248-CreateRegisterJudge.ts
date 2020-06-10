import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegisterJudge1591736316248 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registerjudge',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'name_judge',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'id_judge',
            type: 'varchar',
          },

          {
            name: 'password',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registerjudge');
  }
}
