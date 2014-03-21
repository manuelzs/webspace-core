FROM ubuntu
MAINTAINER Manuel Zapata "manuelzs@gmail.com"
RUN apt-get -qq update
RUN apt-get install -y python-dev python-setuptools supervisor git-core
RUN easy_install pip
RUN pip install virtualenv
RUN pip install uwsgi
RUN virtualenv --no-site-packages /opt/ve/webspace
ADD . /opt/apps/webspace
# ADD .docker/supervisor.conf /opt/supervisor.conf
# ADD .docker/run.sh /usr/local/bin/run
RUN (cd /opt/apps/webspace && git remote rm origin)
RUN (cd /opt/apps/webspace && git remote add origin https://manuelzs@bitbucket.org/manuelzs/webspace.git)
RUN /opt/ve/webspace/bin/pip install -r /opt/apps/webspace/requirements.txt
RUN (cd /opt/apps/webspace && /opt/ve/webspace/bin/python manage.py syncdb --noinput)
RUN (cd /opt/apps/webspace && /opt/ve/webspace/bin/python manage.py collectstatic --noinput)
EXPOSE 8000
CMD ["/bin/sh", "-e", "/usr/local/bin/run"]
