pipeline {
    agent any

    environment {
        VENV = "venv"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Prasath123/izone-site.git'
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

        stage('Backend Setup') {
            steps {
                dir('backend') {
                    bat '''
                    python -m venv venv
                    call venv\\Scripts\\activate
                    python -m pip install --upgrade pip
                    pip install -r requirements.txt
                    '''
                }
            }
        }

        stage('Backend Test') {
            steps {
                dir('backend') {
                    bat '''
                    call venv\\Scripts\\activate
                    python -m compileall .
                    '''
                }
            }
        }

        stage('Archive Frontend') {
            steps {
                archiveArtifacts artifacts: 'frontend/dist/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline Finished'
        }
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}