# Generated by Django 4.0.5 on 2022-06-30 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0002_alter_role_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='name',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название специализации'),
        ),
    ]
