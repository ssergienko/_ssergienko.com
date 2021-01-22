from django.contrib import admin
from .models import Project, ProjectImage, ProjectLinks


class ProjectImageAdmin(admin.StackedInline):
  model=ProjectImage

class ProjectLinksAdmin(admin.StackedInline):
  model=ProjectLinks


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
  inlines = [ProjectImageAdmin, ProjectLinksAdmin]

  class Meta:
    model = Project