node {
    
    checkout scm

    stage ('Build Mule artifact'){
        sh 'cd app;mvn clean package -DskipTests=true'
    }

    docker.withRegistry('', 'docker-hub-login') {
        stage 'Backend Build'
        def backendImg = docker.build("vishalbiyani/mule-app:${env.BUILD_TAG}", '.')
        backendImg.push();

        stage 'FrontEndBuild'
        def frontendImage = docker.build("vishalbiyani/mule-ui:${env.BUILD_TAG}",'front_end')
        frontendImage.push();
    }
}
