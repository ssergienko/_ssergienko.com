# Generated by Django 3.0.8 on 2020-07-19 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_remove_project_projectdescription'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='projectDescription',
            field=models.TextField(blank=True, null=True),
        ),
    ]
