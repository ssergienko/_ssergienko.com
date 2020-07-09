from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home(request, *args, **kwargs):
  return render(request, "home.html", {})

def contacts(request, *args, **kwargs):
  return render(request, "contacts.html", {})

def education(request, *args, **kwargs):
  return render(request, "education.html", {})