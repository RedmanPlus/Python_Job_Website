# Generated by Django 4.0.5 on 2022-06-30 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='name',
            field=models.CharField(max_length=49, unique=True, verbose_name='Название специализации'),
        ),
    ]