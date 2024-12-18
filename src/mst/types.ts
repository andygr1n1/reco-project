import type { Instance, SnapshotIn } from 'mobx-state-tree'
import type { Root$ } from './stores/Root.store'
import type { Company$ } from './stores/Company.store'
import type { User } from './models/User.model'

export interface IRoot$ extends Instance<typeof Root$> {}
export interface ICompany$ extends Instance<typeof Company$> {}
export interface ICompany$SnapshotIn extends SnapshotIn<typeof Company$> {}

export interface IUser extends Instance<typeof User> {}
