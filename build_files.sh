echo " BUILD START"
python - m pip install - r requirements.txt
python manage.py collectstatic--noinput--clear
python manage.py migrate
#web: gunicorn jxsrmaweb.wsgi --log-file -
echo " BUILD END"