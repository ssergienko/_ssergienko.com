# Generated by Django 2.2.9 on 2021-01-22 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0014_projectlinks_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectlinks',
            name='text',
            field=models.CharField(default=None, max_length=100),
        ),
    ]