properties([pipelineTriggers([githubPush()])])
node { 
    stage('Checkout') {
        echo 'Checkout...'
        sh 'rm -rf UI; git clone https://github.com/jeisonroa1/movie-analyst-ui.git UI'
    }
    stage('Build') { 
        echo 'Build...'
        sh 'cd UI; npm install' 
    }
    stage('Test') {
        echo 'Testing...'
        sh 'npm test'
    }
    stage('Deploy') {
        zip zipFile: 'UI.zip', archive: false, dir: 'UI'
                archiveArtifacts artifacts: 'UI.zip', fingerprint: true
    }
}
