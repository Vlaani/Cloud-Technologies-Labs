FROM python:3.7

WORKDIR /ml

COPY /ml /ml

RUN apt-get update && apt-get install -y \
    build-essential \
    curl

RUN apt-get update && curl https://sh.rustup.rs -sSf | bash -s -- -y

ENV PATH="/root/.cargo/bin:${PATH}"

COPY requirements.txt /ml

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8888

RUN --mount=type=secret,id=password

RUN useradd -u 1000 UserA

USER UserA

CMD ["jupyter", "notebook", "--ip=\"0.0.0.0\""]