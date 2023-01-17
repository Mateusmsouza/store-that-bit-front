docker-run-dev:
	docker run -d -p 5173:5173 --volume $$(pwd):/app $$(docker build -q .)

docker-destroy:
	docker rm $$(docker ps -a -q)
