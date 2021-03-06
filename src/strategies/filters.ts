import { FilterCheckFn, FilterFn } from '../types'

export const joinFilters = (filters: FilterFn[]): FilterFn => (
  name,
  type,
  list,
) =>
  filters.reduce(
    (result, filter) => ({ ...result, ...filter(name, type, list) }),
    {},
  )

export const equals: FilterFn = (name, type, list) => ({
  [`${name}`]: { type },
  [`${name}_not`]: { type },
})

export const list: FilterFn = (name, type, list) => ({
  [`${name}_contains`]: { type },
  [`${name}_not_contains`]: { type },
})

export const numeric: FilterFn = (name, type, list) => ({
  [`${name}_lt`]: { type },
  [`${name}_gt`]: { type },
})

export const record: FilterFn = (name, type, list) => ({
  [`${name}_in`]: { type: list },
  [`${name}_not_in`]: { type: list },
})
