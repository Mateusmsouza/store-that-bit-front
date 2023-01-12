docker-build-dev:
	docker build -t storethatbitfront .

docker-run-dev:
	docker run -d -p 5173:5173 --volume $$(pwd):/app storethatbitfront

docker-destroy:
	docker stop rm $$(docker ps -q)
