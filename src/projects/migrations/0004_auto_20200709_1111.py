# Generated by Django 3.0.8 on 2020-07-09 11:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_auto_20200708_1440'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='descrition',
            new_name='description',
        ),
    ]
