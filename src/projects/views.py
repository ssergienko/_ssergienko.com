from django.shortcuts import render

from .models import Project

def projects(request):
  projects = Project.objects.all()
  project = Project.objects.all()[:1].get()
  return render(request, "projects/projects.html", {
    "projects": projects,
    "project": project
  })

def project(request, my_id):
  projects = Project.objects.all()
  project = Project.objects.get(id=my_id)
  return render(request, "projects/projects.html", {
    "projects": projects,
    "project": project
  })