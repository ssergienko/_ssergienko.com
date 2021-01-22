from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(max_length=100, blank=False, null=False)
    company = models.CharField(max_length=100, blank=True, null=True)
    projectDescription = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField(blank=True, null=True)

    class Meta:
        ordering = ['order']


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

class ProjectLinks(models.Model):
    project = models.ForeignKey(Project, related_name='links', default=None, on_delete=models.CASCADE)
    text = models.CharField(max_length=100, default=None, blank=False, null=False)
    link = models.CharField(max_length=100, default=None, blank=False, null=False)