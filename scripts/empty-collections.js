/* global hexo */

// Hexo skips the home page and Atom feed when there are no posts.
// Keep those URLs available until the first article is published.

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

hexo.extend.generator.register('empty_index', function (locals) {
  if (locals.posts.length) return [];

  const indexPath = hexo.config.index_generator && hexo.config.index_generator.path
    ? hexo.config.index_generator.path
    : '';

  return {
    path: indexPath,
    layout: ['index'],
    data: {
      __index: true,
      posts: locals.posts,
      base: indexPath,
      total: 1,
      current: 1,
      current_url: indexPath,
      prev: 0,
      prev_link: '',
      next: 0,
      next_link: ''
    }
  };
});

hexo.extend.generator.register('empty_feed', function (locals) {
  if (locals.posts.length) return [];

  const url = String(hexo.config.url || '').replace(/\/$/, '');
  const title = escapeXml(hexo.config.title || '');
  const author = escapeXml(hexo.config.author || '');
  const updated = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${title}</title>
  <link href="${url}/atom.xml" rel="self"/>
  <link href="${url}/" rel="alternate"/>
  <updated>${updated}</updated>
  <id>${url}/</id>
  <author><name>${author}</name></author>
</feed>
`;

  return {
    path: 'atom.xml',
    data: xml
  };
});
