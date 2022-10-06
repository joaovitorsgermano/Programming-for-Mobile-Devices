import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSales1664895725742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
        await queryRunner.createTable(
            new Table({
              name: "sales",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "total",
                  type: "varchar",
                },
                {
                  name: "desc",
                  type: "varchar",
                },
                {
                    name: "obs",
                    type: "varchar",
                    default: false,
                },
                {
                    name: "id_user",
                    type: "uuid"
                },  
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                  name: "FKuserSales",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["id_user"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                }]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropDatabase("sales");
    }

}
