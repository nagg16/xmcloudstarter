import { SitecorePageProps } from 'lib/page-props';
import { siteResolver } from 'lib/site-resolver';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import config from 'temp/config';

import { getSiteRewriteData } from '@sitecore-jss/sitecore-jss-nextjs';

import { Plugin } from '..';

class SitePlugin implements Plugin {
  order = 0;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) return props;

    const path =
      context.params === undefined
        ? '/'
        : Array.isArray(context.params.path)
        ? context.params.path.join('/')
        : context.params.path ?? '/';

    // Get site name (from path)
    const siteData = getSiteRewriteData(path, config.sitecoreSiteName);

    // Resolve site by name
    props.site = siteResolver.getByName(siteData.siteName);

    return props;
  }
}

export const sitePlugin = new SitePlugin();
