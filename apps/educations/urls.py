from django.urls import path
from . import views

urlpatterns = [
    path('api/education/', views.EducationListCreate.as_view() ),
]