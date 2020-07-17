from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('projects', views.index ),
    path('projects/<int:project_id>', views.index ),
    path('education', views.index ),
    path('contacts', views.index ),
]