import clientFactory from 'lib/graphql-client-factory';
import { siteResolver } from 'lib/site-resolver';
import { GetStaticPathsContext } from 'next';
import config from 'temp/config';

import {
  constants,
  MultisiteGraphQLSitemapService,
  SiteInfo,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { SitemapFetcherPlugin } from '..';

class GraphqlSitemapServicePlugin implements SitemapFetcherPlugin {
  _graphqlSitemapService: MultisiteGraphQLSitemapService;

  constructor() {
    this._graphqlSitemapService = new MultisiteGraphQLSitemapService({
      clientFactory,
      sites: [...new Set(siteResolver.sites.map((site: SiteInfo) => site.name))],
    });
  }

  async exec(context?: GetStaticPathsContext): Promise<StaticPath[]> {
    if (process.env.JSS_MODE === constants.JSS_MODE.DISCONNECTED) {
      return [];
    }
    return process.env.EXPORT_MODE
      ? this._graphqlSitemapService.fetchExportSitemap(config.defaultLanguage)
      : this._graphqlSitemapService.fetchSSGSitemap(context?.locales || []);
  }
}

export const graphqlSitemapServicePlugin = new GraphqlSitemapServicePlugin();
