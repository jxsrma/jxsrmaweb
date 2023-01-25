echo "BUILD START"
python - m pip install - r requirements.txt
echo "RQUIREMENTS INSTALLED"
python manage.py collectstatic--noinput--clear
echo "STATIC COLLECTED"
python manage.py migrate
echo "DATABASE MIGRATED"
#web: gunicorn jxsrmaweb.wsgi --log-file -
echo "BUILD END"