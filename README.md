# Create temporary container

    docker run --rm -ti -v $PWD:/app -w /app node:latest /bin/bash
    
  # Install nestjs CLI

    npm i -g @nestjs/cli

# Create new app

    nest new myapp
