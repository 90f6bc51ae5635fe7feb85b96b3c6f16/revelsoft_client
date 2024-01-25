module.exports = {
  apps: [
    {
      name: 'Revel Soft Office',
      port: 3001,
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
