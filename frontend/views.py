from django.shortcuts import render


def index(request, project_id=None):
    return render(request, 'frontend/index.html')