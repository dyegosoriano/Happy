import {
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
  Entity,
} from 'typeorm'

import Orphanage from './Orphanage'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  path: string

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}
