import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointmentsInstitution1591736688016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointmentsinstitution',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'

          },

          {
            name: 'DateBirthday',
            type: 'varchar',
          },

          {
            name: 'age',
            type: 'varchar',
          },
          {
            name: 'socialSitution',
            type: 'varchar',
          },

          {
            name: 'historic',
            type: 'varchar',
          },

          {
            name: 'avatar',
            type: 'varchar',
          },

          

        ]
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointmentsinstitution');
    }

}
