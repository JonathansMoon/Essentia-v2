echo Entrando na pasta backend
cd backend

echo Entrando na pasta backend
sudo docker-compose up -d

echo Executando run.sh
sudo chmod +x ./run.sh
sudo ./run.sh

echo Entrando na pasta frontend
cd .. && cd frontend

echo instalando dependências
npm install

echo startando o projeto
ng serve

