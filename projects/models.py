from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)