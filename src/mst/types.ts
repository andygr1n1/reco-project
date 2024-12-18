import type { Instance, SnapshotIn } from 'mobx-state-tree'
import type { Root$ } from './stores/Root.store'
import type { Company$ } from './stores/Company.store'

export interface IRoot$ extends Instance<typeof Root$> {}
export interface ICompany$ extends Instance<typeof Company$> {}
export interface ICompany$SnapshotIn extends SnapshotIn<typeof Company$> {}
