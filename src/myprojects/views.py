from django.shortcuts import render

from .models import Myproject


def myprojects_view(request):
    myprojects_obj = Myproject.objects.all()
    myproject_obj = Myproject.objects.all()[:1].get()
    return render(request, "projects.html", {
        "projects": myprojects_obj,
        "project": myproject_obj
    })


def myproject_view(request, my_id):
    myprojects_obj = Myproject.objects.all()
    myproject_obj = Myproject.objects.get(id=my_id)
    return render(request, "projects.html", {
        "projects": myprojects_obj,
        "project": myproject_obj
    })