#!/bin/bash

# variables
ENV_FILE=${1:-$ENV_FILE}
ENV=${2:-$ENV}
PROJECT=${3:-$PROJECT}



touch $ENV_FILE
echo ENV=$ENV >> $ENV_FILE
echo PROJECT=$PROJECT >> $ENV_FILE
