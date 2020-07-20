from rest_framework import serializers
from .models import Project, ProjectImage

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'title', 'role', 'company', 'projectDescription', 'location', 'description', 'created_at')