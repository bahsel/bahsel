#!/bin/bash

cd /root/bahsel/
npm run build
pm2 reload app
