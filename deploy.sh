#!/usr/bin

set -e

PROJECT_DIR=/home/viwath/Portfolio
NGINX_CONF=/etc/nginx/sites-available/portfolio

# Build Kotlin/JS
cd $PROJECT_DIR
./gradlew jsBrowserProductionExecutableDistribution

# Copy Nginx config (from repo) into place
sudo cp $PROJECT_DIR/nginx/portfolio.conf $NGINX_CONF

# Enable site if not already
if [ ! -L /etc/nginx/sites-enabled/portfolio ]; then
  sudo ln -s $NGINX_CONF /etc/nginx/sites-enabled/
fi

# Test + reload Nginx
sudo nginx -t && sudo service nginx restart

echo "✅ Deployment complete. Visit: http://localhost:8070"
