#!/bin/bash

# Set locale
sudo locale-gen en_US.UTF-8

# Upgrade system and install required packages
sudo apt-get update && sudo apt-get upgrade -y
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

# Set editor to vim
sudo update-alternatives --set editor /usr/bin/vim.basic

# Install dependencies
DEBIAN_FRONTEND=noninteractive sudo apt-get install -y build-essential git nodejs supervisor ntp

# Add project ROOT to env
echo "export ROOT=$ROOT" > ~/.bash_profile
