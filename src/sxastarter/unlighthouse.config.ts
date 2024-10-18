import 'dotenv/config';

const site = 'dev-jointcommission.netlify.app';
const config = {
  site,
  ...(process.env.NETLIFY_BYPASS_KEY
    ? {
        extraHeaders: {
          'netlify-protection-bypass': process.env.NETLIFY_BYPASS_KEY,
        },
      }
    : {}),
  scanner: {
    device: 'desktop', // value could be 'mobile' or 'desktop'
    maxRoutes: 200,
  },
};

export default config;
