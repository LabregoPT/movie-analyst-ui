pipeline {
  agent any
  triggers {
    githubPush()
  }
  tools {nodejs "NodeJs"}
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout...'
                sh 'rm -rf UI; git clone https://github.com/LabregoPT/movie-analyst-ui.git UI'
            }

        }
        stage('Build') {
            steps {
                echo 'Build...'
                sh 'cd UI; npm install -g mocha; npm install --production=false'
            }

        }
        stage('Test') {
            steps {
                echo 'Testing...'
				sh 'rm -rf API; git clone https://github.com/jeisonroa1/movie-analyst-api.git API; cd API; git checkout nosql; npm install; nohup node server.js &'
                sh 'cd UI; npm test'
				sh 'killall -9 node'
            }

        }
    }
}
