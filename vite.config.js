export default {
  plugins: [],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.html'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  alias: {
    '@models': '/src/models',
  },
};
