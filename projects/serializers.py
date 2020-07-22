from rest_framework import serializers
from .models import Project, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']


class ProjectSerializer(serializers.ModelSerializer):

    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'title', 'role', 'company', 'projectDescription', 'location', 'images', 'description', 'created_at')
