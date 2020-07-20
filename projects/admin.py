from django.contrib import admin

from .models import Project, ProjectImage

class ProjectImageAdmin(admin.StackedInline):
  model=ProjectImage

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
  inlines = [ProjectImageAdmin]

  class Meta:
    model = Project

@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
  pass

  class Meta:
    model = ProjectImageAdmin