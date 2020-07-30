import os
import sys
sys.path.append('/opt/bitnami/apps/django/django_projects/ssergienko.com/frontend')
os.environ.setdefault("PYTHON_EGG_CACHE", "/opt/bitnami/apps/django/django_projects/ssergienko.com/egg_cache")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_react.settings")
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()