#!/bin/sh
python manage.py collectstatic --no-input
exec gunicorn pixies.wsgi:application --bind 0.0.0.0:$PORT --log-file -