from django.db import models


class Myproject(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=True, null=True)