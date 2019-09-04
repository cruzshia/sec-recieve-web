const commonPlugins = [
  [
    'module-resolver',
    {
      cwd: 'babelrc',
      alias: {
        '@App': './',
        '@Components': './components',
        '@Reducer': './reducer',
        '@Lib': './lib'
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  ]
]

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [...commonPlugins]
    },
    production: {
      presets: ['next/babel'],
      plugins: [...commonPlugins]
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [...commonPlugins]
    }
  }
}
