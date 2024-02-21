module.exports = {
  apps: [
    {
      name: 'revelsoft_frontend',
      port: 5262,
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
