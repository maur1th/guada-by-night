#!/bin/bash

# Set here which connectors to deploy
google=false
ods=true

# Env
user="vagrant"

# Current directory
ROOT="/$user"
DIR="$ROOT/deployment/provision"

# Run base script
source $DIR/base.sh

# Install npm dependencies
cd $ROOT
echo "Installing npm dependencies..."
sudo -u vagrant sh -c "npm install"
