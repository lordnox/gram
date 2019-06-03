export type AnyPartial<Type> = { [Key in keyof Type]?: Type[Key] }

export type Filter<Type> = {
  AND?: Array<Filter<Type>>;
  OR?: Array<Filter<Type>>;
  NOT?: Filter<Type>;
} & AnyPartial<Type> &
  Record<string, any>

export type Where<Type> = Partial<Filter<Type>>
export type Order = any
export type Page = any
export type Data<Type> = Type

export interface NodeType {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export interface ListType<Type extends NodeType> {
  page: PageData
  nodes: Type[]
}

export interface PageData {
  offset: number
  limit: number
}

export interface Paged<Type> {
  page: PageData
  nodes: Type[]
}

export interface FindOneArgs<Type> {
  where: Where<Type>
  order: Order
}

export interface FindOneMany<Type> {
  where: Where<Type>
  order: Order
  page: Page
}

export interface CreateArgs<Type> {
  data: Data<Type>
}

export interface UpdateArgs<Type> {
  where: Where<Type>
  data: Partial<Data<Type>>
}

export interface RemoveArgs<Type> {
  where: Where<Type>
}

export interface Service<Type, GQLType = Type> {
  findOne?: (args: FindOneArgs<GQLType>) => Promise<Type>
  findMany?: (args: FindOneMany<GQLType>) => Promise<Paged<Type>>
  create?: (args: CreateArgs<GQLType>) => Promise<Type>
  update?: (args: UpdateArgs<GQLType>) => Promise<Type>
  remove?: (args: RemoveArgs<GQLType>) => Promise<Type[]>
}
