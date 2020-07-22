# Generated by Django 3.0.8 on 2020-07-22 14:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('educations', '0002_educationcategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='educationCategory',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='educations.EducationCategory'),
            preserve_default=False,
        ),
    ]
