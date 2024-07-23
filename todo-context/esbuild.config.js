const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'], // Your entry point
  bundle: true,
  outfile: 'dist/bundle.js',
  loader: { '.js': 'jsx' }, // This line configures the loader for JSX
  // Other options as needed
}).catch(() => process.exit(1));
