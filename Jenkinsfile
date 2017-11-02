node {
    
    checkout scm

    stage ('Build Mule artifact'){
        sh 'cd app;mvn clean package -DskipTests=true'
    }

    docker.withRegistry('', 'docker-hub-login') {
        stage 'Backend Build'
        def backendImg = docker.build("vishalbiyani/mule-app:${env.BUILD_TAG}", '--no-cache --rm .')
        backendImg.push();
        //backendImg.push('latest');

        stage 'FrontEndBuild'
        def frontendImage = docker.build("vishalbiyani/mule-ui:${env.BUILD_TAG}",'--no-cache --rm front_end')
        frontendImage.push();
        //frontendImage.push('latest');
    }

    stage('Install helm') {
        sh 'wget https://storage.googleapis.com/kubernetes-helm/helm-v2.7.0-linux-amd64.tar.gz'
        sh 'tar -zxvf helm-v2.7.0-linux-amd64.tar.gz'
        sh 'mv linux-amd64/helm /usr/local/bin/helm'
    }

    stage('Deploy Frontend App'){
        

        sh 'helm upgrade mule-master ./mule-chart/ --set image.tag=${env.BUILD_TAG} || helm install --name mule-master ./mule-chart/ --set image.tag=${env.BUILD_TAG}'

        //sh ("sed 's/replaceTagName/${env.BUILD_TAG}/' app-deployment.yaml | kubectl apply -f -")
        //sh 'kubectl apply -f app-deployment.yaml'
        //sh 'kubectl apply -f app-service.yaml'
    }

   // stage('Deploy FrontEnd App'){

   //     sh ("cd front_end; sed 's/replaceTagName/${env.BUILD_TAG}/' app-deployment.yaml | kubectl apply -f -")    
        //sh 'cd front_end;kubectl apply -f app-deployment.yaml'
   //     sh 'cd front_end;kubectl apply -f app-service.yaml'

        // Deploy istio rule yaml
        //sh 'kubectl apply -f ingress-resource.yaml'
        //sh 'kubectl apply -f istio-rule.yaml'
  //  }
}
