import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Optional } from 'sequelize';

interface UserAttributes {
    id: number,
    username: string;
    password: string;
  }
  interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
    timestamps: false,
    tableName: "users"
})

export class User extends Model<UserAttributes, UserCreationAttributes>{
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    username!: string;
    
    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    password!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    accessToken!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    refreshToken!: string;
}