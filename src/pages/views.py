from django.http import HttpResponse
from django.shortcuts import render


def home_view(request, *args, **kwargs):
    return render(request, "home.html", {})


def contacts_view(request, *args, **kwargs):
    return render(request, "contacts.html", {})


def education_view(request, *args, **kwargs):
    return render(request, "education.html", {})