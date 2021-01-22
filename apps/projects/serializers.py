from rest_framework import serializers
from .models import Project, ProjectImage, ProjectLinks


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectLinks
        fields = ('id', 'text', 'link')

class ProjectSerializer(serializers.ModelSerializer):

    images = ProjectImageSerializer(many=True, read_only=True)
    links = LinksSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'title', 'role', 'company', 'projectDescription', 'location', 'images', 'links', 'description', 'created_at')
        
