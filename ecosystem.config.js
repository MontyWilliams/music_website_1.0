module.exports = {
  apps : [{
    script: 'npm start',
  }], 
  deploy : {
    production : {
        key: 'key.pem',
      user : 'ubuntu',
      host : '3.129.69.112',
      ref  : 'origin/master',
      repo : 'https://github.com/MontyWilliams/music_website_1.0.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run start && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
        'ssh_options': 'ForwardAgent=yes'
    }
  }
};
