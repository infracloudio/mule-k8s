node {
    
    checkout scm

    backendImage = "vishalbiyani/mule-app" 
    frontendImage = "vishalbiyani/mule-ui"  
    stage ('Build Mule artifact'){
        sh 'cd app;mvn clean package -DskipTests=true'
    }
    stage('Backend Build') {
        sh 'docker build -t ${backendImage} .'
    }
    stage('UI Build'){
        sh 'docker build -t ${frontendImage} front_end'
    }
    stage('Images Push to registry') {
            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                def customImage = docker.build("${backendImage}", "-f Dockerfile .")
                customImage.push()
            }
    }
}
