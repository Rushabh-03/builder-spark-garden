# GoDaddy VPS Deployment Guide

## Prerequisites

- GoDaddy VPS with Node.js support (Ubuntu/CentOS recommended)
- SSH access to your VPS
- Domain pointed to your VPS IP

## Deployment Steps

### 1. Prepare Your App for Production

Build the application:

```bash
npm run build
```

### 2. VPS Setup

SSH into your GoDaddy VPS:

```bash
ssh root@your-vps-ip
```

Install Node.js (if not installed):

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Or using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

Install PM2 for process management:

```bash
npm install -g pm2
```

### 3. Upload Your App

Option A - Using Git (recommended):

```bash
cd /var/www
git clone https://github.com/yourusername/your-repo.git your-app
cd your-app
npm install
npm run build
```

Option B - Upload files via FTP/SCP

### 4. Configure Environment

Create production environment file:

```bash
echo "NODE_ENV=production" > .env
echo "PORT=3000" >> .env
```

### 5. Start with PM2

```bash
pm2 start dist/server/node-build.mjs --name "your-app"
pm2 save
pm2 startup
```

### 6. Setup Nginx Reverse Proxy

Install Nginx:

```bash
sudo apt install nginx
```

Create Nginx config (`/etc/nginx/sites-available/your-domain.com`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Updating Your App

```bash
cd /var/www/your-app
git pull origin main
npm install
npm run build
pm2 restart your-app
```

## Monitoring

Check PM2 status:

```bash
pm2 status
pm2 logs your-app
pm2 monit
```

## Important Notes

- Keep your VPS updated: `sudo apt update && sudo apt upgrade`
- Setup automatic backups
- Monitor resource usage
- Consider using a firewall (UFW)
- Regular security updates

## Troubleshooting

If app doesn't start:

1. Check PM2 logs: `pm2 logs`
2. Verify Node.js version: `node --version`
3. Check port conflicts: `netstat -tulpn | grep :3000`
4. Verify file permissions
