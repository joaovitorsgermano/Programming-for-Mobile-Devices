import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateProducts1648762718393 implements MigrationInterface {


        public async up(queryRunner: QueryRunner): Promise<void> {
    
            await queryRunner.createTable(
                new Table({
                  name: "products",
                  columns: [
                    {
                      name: "id",
                      type: "uuid",
                      isPrimary: true,
                    },
                    {
                      name: "name",
                      type: "varchar",
                    },
                    {
                      name: "description",
                      type: "varchar",
                    },
                    {
                        name: "id_category",
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
                      name: "FKproductCategory",
                      referencedTableName: "categories",
                      referencedColumnNames: ["id"],
                      columnNames: ["id_category"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    }]
                })
              );
            
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropDatabase("products");
        }
    
}