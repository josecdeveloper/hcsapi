pipeline {

    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage("Build") {
            steps {
                sh 'npm install'
            }
        }

        stage('Deliver') {
            steps {
                sh 'npm start'
            }
        }


    }
}