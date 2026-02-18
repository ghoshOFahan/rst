#!/bin/bash

RG="KnowMore"
DB="db-ahan"
RULE="my-ip-rule"

IP=$(curl -4 ifconfig.me)

echo "Updating firewall to allow IP: $IP"

az postgres flexible-server firewall-rule create \
  --resource-group $RG \
  --name $DB \
  --rule-name $RULE \
  --start-ip-address $IP \
  --end-ip-address $IP

echo "Firewall updated."
