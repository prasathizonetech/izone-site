pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        COMPOSE_PROJECT_NAME = 'izone-site'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    bat 'pip install -r requirements.txt'
                }
            }
        }

        stage('Docker Deploy') {
            steps {
                bat 'docker compose down --remove-orphans'
                bat 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Build failed. Check logs above.'
        }
    }
}
