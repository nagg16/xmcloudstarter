import clientFactory from 'lib/graphql-client-factory';

import { GraphQLEditingService } from '@sitecore-jss/sitecore-jss-nextjs/editing';

/**
 * GraphQL Editing Service instance. Used to fetch editing data in Pages preview (editing) Metadata Edit Mode.
 */
export const graphQLEditingService = new GraphQLEditingService({
  clientFactory,
});
