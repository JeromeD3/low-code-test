import {
  Entity,
  Column,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum UserStatus {
  disabled = 0,
  enabled = 1,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 自增主键
  id?: number;

  @Column({ default: null }) // 普通类型
  name: string;

  @Column({ default: null })
  username: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  avatar?: string;

  @Column({ default: null })
  mobile?: string;

  @Column({ default: null })
  enName?: string;

  @Column({ default: null })
  departmentName?: string;

  @Column({ default: null })
  departmentId?: number;

  @Column({ default: UserStatus.enabled })
  status?: UserStatus;

  @UpdateDateColumn()
  updateTime?: string;

  @CreateDateColumn()
  createTime?: string;
}
