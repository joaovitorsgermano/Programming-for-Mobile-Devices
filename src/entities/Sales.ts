import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
  } from "typeorm";

  import { User } from "./User";
  import { v4 as uuid } from "uuid";
  
  @Entity("users")
  class Sales {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      productId!: number;
    
    @JoinColumn({ name: "id_user" })
    @ManyToOne(() => User)
      idUser!:User;

    @Column()
      total!: number;

    @Column()
      desc!: string;
  
    @Column()
      obs!: string;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Sales };
  