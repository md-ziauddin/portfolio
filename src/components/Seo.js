import React from 'react';
import SeoAeo from './seo/SeoAeo';

/**
 * Backwards-compatible wrapper around modular SeoAeo component.
 * All SEO and AEO configuration is managed in `src/config/seoConfig.js`.
 */
const Seo = (props) => <SeoAeo {...props} />;

export default Seo;
