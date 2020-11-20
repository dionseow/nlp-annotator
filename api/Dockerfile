FROM 
COPY ./requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt -i

COPY . /app
EXPOSE 80

ENV MESSAGE "App built"
