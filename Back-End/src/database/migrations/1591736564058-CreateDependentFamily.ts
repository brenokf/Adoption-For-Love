import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDependentFamily1591736564058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dependentfamily',

        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'name_dependents',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'age',
            type: 'varchar',
          },

          {
            name: 'degreeofKinship',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dependentfamily');
  }
}
