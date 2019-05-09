import { pluralize, singularize } from 'inflection';
export const defaultNamingStrategy = name => ({
    arguments: {
        data: 'data',
        order: 'order',
        filter: 'filter',
        page: 'page',
        where: 'where',
    },
    events: {
        create: `onCreate${singularize(name.toString())}`,
        delete: `onDelete${pluralize(name.toString())}`,
        update: `onUpdate${singularize(name.toString())}`,
    },
    fields: {
        create: `create${singularize(name.toString())}`,
        delete: `delete${pluralize(name.toString())}`,
        findMany: `get${pluralize(name.toString())}`,
        findOne: `get${singularize(name.toString())}`,
        update: `update${singularize(name.toString())}`,
    },
    types: {
        createType: `Create${singularize(name.toString())}Data`,
        dataType: `Update${singularize(name.toString())}Data`,
        filterType: `${singularize(name.toString())}Filter`,
        orderType: `${singularize(name.toString())}SortOrder`,
        pageType: `${singularize(name.toString())}Page`,
        whereType: `${singularize(name.toString())}Where`,
        listType: `${pluralize(name.toString())}`,
    },
});
//# sourceMappingURL=naming.js.map