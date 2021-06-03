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
                sh 'cd UI; npm install -g mocha; npm install chai; npm install chai-http; npm install express'
				sh 'npm list'
            }
             
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
            
        }
    }
}
