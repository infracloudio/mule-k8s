node {
    
    checkout scm

    stage ('Build Mule artifact'){
        sh 'cd app;mvn clean package -DskipTests=true'
    }

    docker.withRegistry('', 'docker-hub-login') {
        stage 'Backend Build'
        def backendImg = docker.build("vishalbiyani/mule-app:${env.BUILD_TAG}", '.')
        backendImg.push();
        //backendImg.push('latest');

        stage 'FrontEndBuild'
        def frontendImage = docker.build("vishalbiyani/mule-ui:${env.BUILD_TAG}",'front_end')
        frontendImage.push();
        //frontendImage.push('latest');
    }

    stage('Deploy Backend App'){

        sh ("sed 's/replaceTagName/${env.BUILD_TAG}/' app-deployment.yaml | kubectl apply -f -")
        //sh 'kubectl apply -f app-deployment.yaml'
        sh 'kubectl apply -f app-service.yaml'
    }

    stage('Deploy FrontEnd App'){

        sh ("cd front_end; sed 's/replaceTagName/${env.BUILD_TAG}/' app-deployment.yaml | kubectl apply -f -")    
        //sh 'cd front_end;kubectl apply -f app-deployment.yaml'
        sh 'cd front_end;kubectl apply -f app-service.yaml'
    }
}
