FROM python:3.9-slim-buster

ENV PYTHONUNBUFFERED True
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --default-timeout=1000 -r requirements.txt

COPY . .

CMD ["python", "app.py"]